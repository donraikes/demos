/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'knockout', 
'ojs/ojbutton',
'ojs/ojpopup',
'ojs/ojselectcombobox',
'ojs/ojlabel',
'ojs/ojknockout'],
  function(ResponsiveUtils, ResponsiveKnockoutUtils, ko) {
     function ControllerViewModel() {
       var self = this;

// --------------------------------------
// for the select-one combobox
self.buttonsetOne = ko.observable("red");
// end of code for the select-one combobox
// --------------------------------------

// --------------------------------------
// for the select-many checkboxes
self.formattedText = ko.observable("Sample Text");
self.formats = ko.observableArray(["bold", "underline"]);
self.browser = ko.observable("CH");
self.multibrowser = ko.observableArray(["FF", "SA"]);

this.classes = ko.computed(function() {
	return  this.formats().join(" ");
},this);
// end of code for the select-multiple component.
// --------------------------------------

      // Media queries for repsonsive layouts
      var smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("JET Combobox demos");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
     }

     return new ControllerViewModel();
  }
);
