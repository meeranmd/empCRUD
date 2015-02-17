sap.ui.jsview("empcrud.EmpDetails", {
	 /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf empcrud.EmpDetails
     */
     getControllerName : function() {
                 return "empcrud.EmpDetails";
     },

     /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf empcrud.EmpDetails
     */
     createContent : function(oController) {
                 var oPage = new sap.m.Page({
                             title: "Employee Details",

                 });
 
                 var oBtnUpd = new sap.m.Button("Update", {
                             text: "Update",
                             tap: [ oController.Update, oController ]
   });

                 var oBtnDel = new sap.m.Button("Delete", {
                             text: "Delete",
                             tap: [ oController.Delete, oController ]
                             });                                
                 var oBtnCan = new sap.m.Button("Cancel", {
                             text: "Cancel",
                             tap: [ oController.Cancel, oController ]
                             });
                 var oBtnSub = new sap.m.Button("Submit", {
                             text: "Create New Employee",
                             press: oController.NewEntry,
                             });
             
                 var oBtnSav = new sap.m.Button("Save", {
                             text: "Save",
                             tap: [ oController.Save, oController ]
                             });
//Dialog box / pop-up window for Add/Modify Employee Data             
 
                 var oDialog = new sap.m.Dialog("Dialog",{
                             title:"Add/Modify Employee",
                             modal: true,
                             contentWidth:"1em",

                             content:[
                             new sap.m.Label({text:"Enter Emp Id(must be a number)"}),
                             new sap.m.Input({                                      
                             maxLength: 20,
                             id: "Id"
                             }),
                             new sap.m.Label({text:"Enter Name"}),
                             new sap.m.Input({                                      
                             maxLength: 20, 
                             id: "Name"
                             }),
                             new sap.m.Label({text:"Enter Address"}),
                             new sap.m.Input({                                      
                             maxLength: 20, 
                             id: "Address"
                             }),                                
                             new sap.m.Label({text:"Enter Designation"}),
                             new sap.m.Input({                                      
                             maxLength: 20,
                             id: "Role"
                             }),oBtnUpd, oBtnDel, oBtnCan, oBtnSav
                             ]
                             });
 
//Table or Dashboard to show the Employee Data                        
                 var oTable = new sap.m.Table({
                             id: "Employees",
                             itemPress : [ oController.ItemPress,oController ],
                             columns: [
                             new sap.m.Column({
                             width: "1em",
                             header: new sap.m.Label({
                             text: "Emp ID"  }) }),
                             new sap.m.Column({
                             width: "1em",
                             header: new sap.m.Label({
                             text: "Name" })
                             }),
                             new sap.m.Column({
                             width: "1em",
                             header: new sap.m.Label({
                             text: "Address"
                             })
                             }),
                             new sap.m.Column({  
                             width: "1em",
                             header: new sap.m.Label({
                             text: "Designation"
                             })
                             })
                             ] 
                 });
 
//Template  to map the data to the respective column      
var template = new sap.m.ColumnListItem({

       id: "first_template",
       type: "Navigation",
      visible: true,
       cells: [

       new sap.m.Label("ID", {
        text: "{Empid}"
          }),
       new sap.m.Label({
        text: "{Empname}"
                }),
       new sap.m.Label({
        text: "{Empadd}"
          }),
       new sap.m.Label({
       text: "{Empdes}"
         })
         ]      
});

var  oFilters = null;
oTable.bindItems( "/results",template, null, oFilters);      
oPage.addContent(oTable);
oPage.addContent(oBtnSub);
 return oPage;              
     }

});