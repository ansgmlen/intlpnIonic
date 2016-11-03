<style>
  @media (min-width: 680px) {
    .modal-backdrop.active .modal-backdrop-bg {
      opacity: .7;
    }

    .modal-backdrop .modal-wrapper .modal {
      left: 5%;
      right: 5%;
      width: 90%;
    }

    .modal-backdrop .modal-wrapper .modal .bar {
      height: 64px !important;
    }

    .modal-backdrop .modal-wrapper .modal .bar h1.title {
      font-size: 2em !important;
      height: 63px !important;
      line-height: 64px;
    }

    .modal-backdrop .modal-wrapper .modal .has-header {
      top: 64px !important;
    }

    .modal-backdrop .modal-wrapper .modal .has-footer {
      bottom: 120px !important;
    }

    .modal-backdrop .modal-wrapper .modal .alert p {
      font-size: 1em;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted {
      background-color: transparent;
      /*bottom: 25% !important;*/;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted .bar {
      background-color: transparent;
      background-image: none;
      border: none;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted .bar.bar-footer {
      background-color: #fff;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top: 1px solid #ddd;
      height: 120px !important;
      padding: 2em;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted .bar.bar-footer .button + .button:last-child {
      position: static !important;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted .bar .title {
      color: #fff;
      font-size: 3em;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted ion-content {
      border-radius: 20px;
      overflow: hidden !important;
    }

    .modal-backdrop .modal-wrapper .modal.modal-inverted ion-content.has-footer {
      border-radius: 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
</style>
<ion-modal-view class="modal-inverted" id="add-visitor">
  <ion-header-bar>
    <h1 class="title">Visitor {{guest.guests.length + 1}}</h1>
    <button class="button button-clear button-light icon ion-close" ng-click="guest.closeGuestDetails()"></button>
  </ion-header-bar>


  <ion-content class="background-white has-footer" scroll="false">
    <div name="guestDetailsForm">
      <div class="row padding-large" style="padding-bottom: 0;">


        <div class="col col-25">
          <button class="button button-block button-camera padding-right-large" ng-click="guest.clickPicture()">
            <img ng-show="guest.imageSrc !== undefined" ng-src="{{guest.imageSrc}}" class="image-responsive">
            <span ng-show="imageSrc === undefined"><i class="icon ion-camera"></i><div>Add photo</div></span>
          </button>
        </div>

        <div class="col col-75">
          <div class="row">
            <label class="item-input item-stacked-label col col-50 padding-right-large">
              <span class="input-label required">First name</span>
              <input ng-model="guest.details.firstName" ng-change="guest.validateGuestDetails(guest.details.firstName, 'firstName', 17)" type="text" placeholder="" id="firstname" name="FIRSTNAME"
                     ng-required="true" class="col-90" focus-me>
            </label>
            <label class="item-input item-stacked-label col col-50">
              <span class="input-label required">Last name</span>
              <input ng-model="guest.details.lastName" ng-change="guest.validateGuestDetails(guest.details.lastName, 'lastName', 17)" type="text" placeholder="" id="lastname" name="LASTNAME"
                     ng-required="true">
            </label>
          </div>
          <div class="row">
            <div ng-if="guest.guests.length < 1" class="col col-50 padding-right-large">
              <div class="input-label required" style="width:100%; line-height:0px; ">Phone number</div>
                  <intlpn id="phone" ng-model="guest.details.phone.number" placehoder="placeholder" national-mode="true" default-country="{{guest.defaultCountry}}" name="PHONE" data-method="getPhone"></intlpn><!-- only-country="['fr','us','cn']" -->
            </div>
            <label class="item-input item-stacked-label col col-50">
              <span class="input-label required">Company</span>
              <input ng-model="guest.details.company"  ng-change="guest.validateGuestDetails(guest.details.company, 'company', 20)" type="text" placeholder="" id="company" name="COMPANY"
                     ng-required="true">
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col padding-horizontal-large">
          <div class="vz-checkbox" ng-click="guest.checked()">
            <i class="{{guest.agreeDisclaimer.checked}} checkbox"></i>
            <p class="label required">I agree to the Terms and Conditions</p>
          </div>
          <ion-scroll direction="y" style="height: 100px;">   <b>Terms and Conditions:</b> You agree to abide to Verizon’s rules and procedures related to Security and Facilities Management, which are available upon request. Unless specifically permitted by you, the use of the check-in service does not grant us the license to use, reproduce, adapt, modify, publish or distribute this content for our commercial, marketing or any similar purpose. However, nothing in these terms shall restrict our right to compile and use aggregated usage data and statistics, or to disclose these aggregated statistics, as long as these do not describe or identify any individual user. </ion-scroll>
        </div>
      </div>

    </div>
  </ion-content>
  <ion-footer-bar style="overflow:hidden; width:100%;">
    <!--guest.imageSrc === undefined || guest.imageSrc === '' || -->
    <button class="button button-assertive button-primary button-large"
        ng-disabled="guest.agreeDisclaimer.checked == null || guest.details.firstName == undefined || guest.details.firstName === '' || guest.details.lastName == undefined || guest.details.lastName === '' ||  guest.details.company === undefined || guest.details.company == '' || phoneValCheck() "
        ng-click="guest.addGuests()" style="float:left; width:49%;">Submit <i class="icon ion-ios-arrow-right"></i>
    </button>
    <div style="width:2%;">&nbsp</div>
    <button class="button button-dark button-large" style="float:right; width:49%;" ng-click="guest.closeGuestDetails()">
      Cancel
    </button>
  </ion-footer-bar>
</ion-modal-view>
