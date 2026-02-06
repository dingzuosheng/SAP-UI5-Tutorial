sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel"
],
     function(Controller, JSONModel, MessageToast, ResourceModel){
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.App", {
            onShowHello: function () {
                //read msg from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);

                //Show message
                MessageToast.show(sMsg)

            }
        });
});