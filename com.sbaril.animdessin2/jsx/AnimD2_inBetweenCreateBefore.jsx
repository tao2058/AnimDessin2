﻿// Copyright 2013
// Compiled (via JavascriptListener or ActionToJavascript Xtools�) by St�phane Baril
// Modified on Mach 2014 by Clunkid (https://vimeo.com/clunkid)

// Updated 2020
// Modified on April 2020 by Rombout (https://https://github.com/schroef/AnimDessin2)

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
app.bringToFront();
docRef = app.activeDocument;

// Call main function from getselected, we can reuse scripts
var ScriptFilePath = Folder($.fileName).parent.fsName;
$.evalFile(new File(ScriptFilePath + '/AnimD2_applyToAllLayers.jsx'));

///////////////////////////////////////////////////
// SETUP
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////


function createInBetween() {

    ErrStrs = {};
    ErrStrs.USER_CANCELLED = localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation");
    try {
        // =======================================================
        // Create new frame layer
        var idMk = charIDToTypeID("Mk  ");
        var desc13 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref7 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref7.putClass(idLyr);
        desc13.putReference(idnull, ref7);
        executeAction(idMk, desc13, DialogModes.NO);

        // =======================================================
        // Reduze the end of the layer to the actual frame
        var idmoveOutTime = stringIDToTypeID("moveOutTime");
        var desc99 = new ActionDescriptor();
        executeAction(idmoveOutTime, desc99, DialogModes.NO);

        // // =======================================================
        // // Select new created frame layer
        // var idnextFrame = stringIDToTypeID("nextFrame");
        // var desc11 = new ActionDescriptor();
        // var idtoNextWholeSecond = stringIDToTypeID("toNextWholeSecond");
        // desc11.putBoolean(idtoNextWholeSecond, false);
        // executeAction(idnextFrame, desc11, DialogModes.NO);

        // =======================================================
        // Move selected frame layer after
        var idmove = charIDToTypeID("move");
        var desc9 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref5 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref5.putEnumerated(idLyr, idOrdn, idTrgt);
        desc9.putReference(idnull, ref5);
        var idT = charIDToTypeID("T   ");
        var ref6 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idPrvs = charIDToTypeID("Prvs");
        ref6.putEnumerated(idLyr, idOrdn, idPrvs);
        desc9.putReference(idT, ref6);
        executeAction(idmove, desc9, DialogModes.NO);

        // =======================================================
        // Select frame layer before
        // var idpreviousFrame = stringIDToTypeID("previousFrame");
        // var desc40 = new ActionDescriptor();
        // var idtoNextWholeSecond = stringIDToTypeID("toNextWholeSecond");
        // desc40.putBoolean(idtoNextWholeSecond, false);
        // executeAction(idpreviousFrame, desc40, DialogModes.NO);

    // Allows for cancel without feedback message
    } catch(e){
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;}
        else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
  }
};

//=========================================
// createInBetween.main
//=========================================
//


createInBetween.main = function() {
    // Does single selection
    // createInBetween();
    // Complete selection
    applyToAllLayers(createInBetween);
};

app.activeDocument.suspendHistory(localize(locCreateInBetween), 'createInBetween.main()');