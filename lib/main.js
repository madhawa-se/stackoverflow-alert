var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
var windows = require("sdk/windows").browserWindows;
var tabs = require("sdk/tabs");
const {Cu,Ci,Cc} = require("chrome");
var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
Cu.import('resource://gre/modules/Services.jsm');
Cu.import('resource://gre/modules/ctypes.jsm');
var as = Cc['@mozilla.org/alerts-service;1'].getService(Ci.nsIAlertsService);
var javaicon='data:image/gif;base64,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';
var as = Cc['@mozilla.org/alerts-service;1'].getService(Ci.nsIAlertsService);
var javaicon='data:image/gif;base64,R0lGODlhZABkAPcAAPXY2ODg4O7u7+pmZpvD3NuPkOrq6jOMxubCw+fa2ua7vC2JxBuCw+iGh+qhoZbE4+Ls8Vmi09XW1tvr9OeUlfJ7e8vV202aytPZ3ou72tXi6tTU1OotLt7d3fjJytzc3Pa5uti0tfWWlnarzWyq0gB0vQp5v+30+uoyMxV/wdvk6dra2iKFxGalzefk5NfX1/7+/lOcy8va4v319eLp7czMzMDc7c7Pz+t2dqHL5gx7v8nJyUKWyt+rq4a733Gv1fzr6/GJifH3+nyw0tDQ0IS5283e9NLS0uo5OqrN4+tUVTuSybbS5Mrd6Nre4YG11WWq1cbGxsTO1JG+2utCQvP4++lLS0GTxszj8fbk5PKsrMLS3Pzk5N1ub0udz7zZ7evx9YOyzqHF23u02b7U4u1bXC2Mx6rR5+JdXZi81OHn69vh5V2gy5C71NTl8P34+AR3vqnE1bLM3bvGznax1eDT0z2RxQZ4vzWQydTd49DX3CaIxZ/B1WCm073M1VKg0Oju8kaYzIy51crExLnN2fj7/Zq4ysXW4Mbf7/D09/fw8Mm8vKzL3tfGxurs7myu1uNKS0yXx9ClpbPK2NTQ0OTv9azH2Ofx+Iq10MHJzvn8/ekwMeGAgNjo8uxPUNze4Nfc39De58rNz7nX6+Dj5X243OdQUes+P+ng4IK22xB8wOc8PUeVx4y/4AB0vgBzvrLQ4gB1vedGRgJ2vf39/fz8/Pr6+vf39/v7+/j4+OTk5Pn5+eLi4vT09PHx8efn5+3t7eXl5fX19fb29uzs7Ojo6PPz8/Ly8uPj4/Dw8Obm5unp6f/9/QF1vQN2vv3+/vf5+ek3OPz9/iuHy/vf3u9vcO5hYszJyevo6Pz8/b7S3SqIw/39/u3u7/j6++Hh4QB1vMfY6cPY59PT0/f09LjY7PT3+fj29tnZ2dna2vHo6Oo1NqbK58vR1ABvv+tXWPP19wh4v+Hk5tHR0e/y9KfH2+Du9udISevr6+3m5rDF0au9x57H4exGRz+Uz////yH5BAAAAAAALAAAAABkAGQAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNqPAikApd/MDaKHLnwTTURtFLCCEmyJclaFTzNwFWrFi2WLnNiZFbhFIBcu2zhuqmzaMU3OJCAMCbs1q5aOI1KdTjD2jotvnwZu2WL1tSvDbmcQqKlG7FkvXLVAss2IQgOVBQsWwbs2C2obfMSrMbBU4JfwQwkG4Yrql6wHtZxwLFMF7JiAoQVPty2Koerwb59+xV5MmWwIjhweIcKWYAAnAkb/qwTxCkOKBy4CNABdbK7rKd66CfamotvHz58W+Yrl9fcRXeLPoVAV4cVH5AR69UVeWveHDY5CNYBHboOygSo/7bekpkWJKI5NHDR/cWKbwaO7TrOjBl5jTOCKBZdLUGHFxK8AJ54Q3HhATX23XcRNdVskt4A/r2wgQQr8IKPMbt4EEQFWgCRzU0rKSiRB0qkx0F//40zzgsBFJOPFtZQUQEAM9GkkogPmfdaejgksIIERxwhQQd1iKDEOp6AoMgbt+SSi1Ag4shQfiikt04Dz20wzzwb1EGBJ5ugEEQWtwjTy5nDcGXTalISxAUOJp7iQADojEMEEZT08I5oSQpjjC/JCJCMVsPsMhSbbf5DjTUm9qPAf/PccEMjnFS5STUA+CIAMPh0CkwyW9myZqIGUVOGiUogsMIGREgaAhqiif+ZD6fF/PJLMQYA44swuRxKakFAnJpeqiuMc0MNN/RghWjrUECMAco4hkwwxZzVi5pE/SrQDHCmZwoCdR57QwiyiLZJEPgow8tpASDzi7XYIiplaOkh0cMLRNSAbCPvOHipC6YF18E3yhCza69RaisQAP04mB0nL8yj7w0bVCrat8h84N0HARTsyzCiZquwQPTy2cgNO+xAMQI7btLANz9K8F0wxNjVlbyJzsCXuQ2gvEMNG3RAgZU9rDqOBB/oQowxCOOcaLDprRLCDlHsME/SA9Tbg51HoGMh06OODCyjFw8SRRQ1vMBLPiXGSoEoFHfwS3F4iW2QSemhYfYOR3T/sIw6nqS3SRfX1CDBN8RI5rS2tIhQJQd6o/2CLgIoIqxoq0hyw+QC3CKy3QQ9w7BokCyi8gfFHHNOAyZyQPgLwSRjHOgH0ZIL6xxkzncH+PSyy1smblIA554v/isttgCwLApdAB1A4rtk0XZ6VISAuOK0F4R8Lw4ods8ihyduSy4OtA75C8UU9zntMOAyTDdwbsKJBAH0vsstWWQdfAGIU7e+3TCoRS58kYCsySIEAVjGMYDSC5a1zhR1iN0tPJO9f2wPG3UwBQcGUIfwDCMXwuhG90wUjRB0wAAY+p/YAjhAbCDACpuggHSudQtfKIMTDruMJDaADAIZL1G0cJ8A/36hgHtEQy6DuUUvgJHB9ERDEvPwmzGqU0GQbA8YylAAFZSQgG5sZRjHWAYOSbeItMVudlUEiQCNgUUtNgAbyWiKMJLhgGg8rGoS6CFu0mhBXNziGMAohgKsoQBgbEWJ54HcIuYQhQ18AxjDWAvtpFEITTzDin4E5DIQ4IB8HMwcQeDAPaaGNgnwonOSFIgmKmGDHDwgB4g4ATd+KJUq2AMLZ2gFP8pxgmesBHm3MIYA8IEKOKYlC++QhQIkcCwioOOMx/lHIc7QBy/4gwHNAMcBWnGJQ9FyJCfAwgP+MA08/KEINqiEN2ySEmAaI1AC0IoiRGANDyjjAxsQUgBQOP+fgZwAERMoBDQ6UYoUxKIEXnCDoRI2FTeM0wTuwIMPEAENJwElZO3EBQiNcQxjGMMDIqBGMooRgBXMzIcEgQEtajG+YSSBASUoAQ8g4JSwFQURP9iDK2JhBnYAYhhmOlNTnrQmleLifsMYBjmocY4/4kMXAfgGzTCUjQlgwR4rMSoIj5GMDMAhphnoRlp8lZNCFIEFrohpCaDwJ3gO6hjXWmhWV2qLXQTFFrYIJhbzcAhY8KMVPwjEH/hhD2mkBBd57YUvgBGKBaR1CWswpFq+KREh7EGtMU0BD0jQhnpoowkaUAMg6JEIc1RBCCe4hD06gQVElOMMOWjFGEjwBx7/mIEFKbhDCe4QgVFcAq+4CG5L36mCC8SUBYdQBjB8p0KNSAMLjzDDV9MaUxOoIgUMYMAe9mCG7pphuyxgQXYZkAIdmOCrajUBCwLxA340ARC9EEaagoLYlh6juMeVAmo6R0GSqHQYnYCFIFrAigUwQAdwaAZmF6zWZjjjDqpgwQEC0Qc6TIERZNAADRwhgA4LCq5OEQpidzEMDZghpnZoBzq+0TsqtoSFxzDANyImikzMQR9x4AMfpsDjHhOAAPxgBBPIEI7QLsMAyyiGkosxFwM42cnEEMAxeGUjuubAGTEdwTyGNLd+uoSFvlhGAF5whGZu4AUcm5YybqXkJC/Z/1a/UEYwgqGLOtt5zsFQBq6kXKhRceMS/phFCbbhh3mMYwXQzEkAd2EMYjjnBeM4wjj84Id01Caq3+CFpjetmU57OtO8QAYydBGMW+FDV2m5mUCeMYZXlEAVfJCAoREtu2j6F3nD8AU+MtMBC4ThAnG4NLuGTexOa3rUeb7VkYnxqSnHSyAPgEMsVDGFDgBpAx/osq39y1IwCoAYhwhECfYgrVGTGs/ozvOale1kfBBDDaFwxKCYEuJRwaAVut2DGILxAQmsaJ9T3PZIVMrS+9GDBzFVBQkYIQNS4MrdxIi4xJkNDGAIgAahYAI/igCFQJgBChCYb8hCdAIogMMVEf8Ih4x/hOZgoLQoKl3pLryA2RTs4QBX+EMffjCGImTg5z5IBR2gEAEe4GEPDFAFltVqhlYAAkosKQceXuGPJAACGNxBB5p5wc/mvpgWE+iDCTAbC1couBlwuEM81n6HBDOY7Ko4wA80UChcSGMCUGCAF3zaCwEUgxcd+EAHeEGcCVIWIwGEhzjogIcUmMAZCn77gh18Bx2kYAEXoIMYDrEGNRhMGInIQR9KgQV45KLvBsjMaZCxjMGoGiztu0UyftEBPxhiCC2IASuWcIBtbHcPCzjAEgIRgxYMobNbcMI3aFMbghkMEFgQQi00KgxfEOMXugi1MvDheq8r2o+zH/P/Bsb/ghfowQLoT78eMCCw4KzApOUv/3d4ARlhGOqo3jZArX6Rq2OAzPuKJkAxljESMiEScIAImIAKuIAvMH/LEBl3pUSaQgzuFk9jBYCKhmvJYADaQAjeEX8LGIIHKH/Q0S7FUBdcgVdlcgyA4gsgNnKUsWid8AgLIAa6sHwdEHgf8H48yIPBIXiXxgu6oGf4IADGUHcjVibCIF9c4U2fsRL24AXN4AoXIAYyIA9yNmd2JmrmpgukIAOMMGBPoAIWpxW8IhQ1wVJ1ZVcjd3g5YQMHlXAMcAA88AckMAQ+x2MZ8AQ/0Aceh1tjdwdmMAUh9yRDcRMpkYbsFCLkcQJ9/yBoDOYMD7Z28XAHdwB5kncHe/AAwtCGWfWJOAIDieADLKBbkneKagVhSzAETXCEMKgghXAJE9AJE3ACv2QLwqABgnABSRcPqBhTzmB52xADYTAJn8AL7+ILXIGBYCEE4gQFXhAIEVAKX1AIMtcLxJAxUmAII8AGkXAFB3AAC7AN4WgHrMAGI4AJ+tAOGzAOE4IOHbNcT7EaMCAEhcAWE8APf3BdXvAA6RRiwbULS6QL/dYqklIDNjYHCpkJonAnknIsE7Nl0REfEyRw/4AFqXACzOCGEXEJPoAHruAMUIAIuXALSZUmF0ViYQYzsnaQ+vKSMBmTNUAEK9IBUzVZB//xAPFgBO3EiCRhBP4ADjH1CMPQCyyYFXDVFHYFQhvoHCsgIUdgkC6JLA9JBEdwZisQALogGJ1YN/7UCikABSeQDVXGkQoxAQcQC3E4iKGADwZwavF0hHdFYscgAMsQDOuyg1rHgA0oeAHAC8FAFwfjK4VgD2cABdOwBz5wAiXpFGQlEohgimoVDwxwAUNghTTgC9eChtOXC8PwTpyyDIDhGJsWaqS2ZstwasngbGAwATbADj4ABUuQdEvgA51gDkHVC24ABjZBEoWQA3jweJFXAq/QDPFweRQ2Bg9wBl+ABbQ4ARAQnRBAAzSgBmqgAtipAhoQCqHQBOHABEnwV2P/AAV/sASAaAImoANLMAY2AAhL2FaOkAGPUAk3Y5YH0T5gAAtDwAZ2AIjxAIkl0AzDWQImgF3bZQZ4kKAK2l17IF6qYAKuhlmzEA/XZQZ/MAZJ4AZnwlEsKAAqwAg8wABM4Jg3ohHIIwzAgAzocANzsA+GEAbdeAFL8F3klQIPeom/iHbpqQrZtQd4QGEWBgsalhXwJADdgA8qQAZPYAavsAewoJkk6pMXcUUqKjE/QwQb8B3f4AQyQAZyUA8EMAV7OAZ0QAc/8Ag/QAI/8AN0MAZPkAFTQABCJg6hQAMVN3Gd4mS/EAraQAAkgAdCyQIkoAFluJk2NaVCRHuQdidH/yMBFqAHzZdp5qZu6wZnbwZncKYMmrqpwcBXcsAHQxADB6AKruAKOmAHY3AIR1aBmtk0GrFoS/QLgLeD7ycBcQCj6ZgGcUAIUmABGCBsp/FpnfYJGGABW0AIlsAHbYB7F3B0pBoLzaADZhADTyAHTmCpR/Yp1/KYF6FVvZAMxCCadIYM34ABhJAG+wmO2xB8dnAFV8AK8BoJkXAB8soKPHAFdtB74mWj6BVTOsACdsAGQ5AGcmABa3Bnc4aa1uKqr0pXZfInm0KBSPYLpAAKx2oJaYAJI9ACbHABrACO4rgNvieywYdzkRADbHCHmMAHk7AFvuoEm8aFXFhnemYAfP8mKvZ5nwSHWCUJVEY5gQYwmrywfJ/wCaCAAUiLAXqwtEy7tEgLCqDgBJFqbKUZs8imDKnJZ0/BjBPxS4mYhMJQl8Cgf3FGZ1soalWbtmpbtTN7mr+QtVC6tTkLEb/EUluVDMDwLHOxf3GWhXb2t4AbuOe2bkxmAMxmgR/0irBnVPfjJ1zlYXmbp0jmZktWuZY7F0f2lu5mcfGUlI55qGyxs+NjkmbiUUeZDEUKuRW3uqvrYR42KC5oDPHVJEFRVE8Yc9NXV41JurnZCx5luscQvMH7ux4lVExIu2ioEnMrEnO1UtNXX2toUbt7C9RbvdLLhiJWE8q7vFLxie3UTooLGL7a+70gIqUbERAAOw==';


var notifListener = {
	observe: function(aSubject, aTopic, aData) {
		//console.error('incoming notification observer:', aSubject, aTopic, aData);
		if (aTopic == 'alertclickcallback')	{
			//console.error('user clicked trying to throw click');
			//Services.prompt.alert(Services.wm.getMostRecentWindow('navigator:firefox'), 'focus firefox', 'will now focus fireox and then focus the tab');
			grabFocus();
		} else if (aTopic == 'alertshow') {
			console.log('just showed notification');
		} else if (aTopic == 'alertfinished') {
			console.log('just alertfinished')
		}
	}
};

//x
pageMod.PageMod({
  include: "http://stackoverflow.com/questions/tagged/*",
  contentScriptFile: self.data.url("my_script.js"),
  onAttach: startListening
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var user32 = ctypes.open('user32.dll');

var GetForegroundWindow = user32.declare('GetForegroundWindow', ctypes.winapi_abi,
    ctypes.voidptr_t // return
);

var DWORD = ctypes.uint32_t;
var LPDWORD = DWORD.ptr;

var GetWindowThreadProcessId = user32.declare('GetWindowThreadProcessId', ctypes.winapi_abi,
    DWORD, // return
    ctypes.voidptr_t, // hWnd
    LPDWORD // lpdwProcessId
);

var AttachThreadInput = user32.declare('AttachThreadInput', ctypes.winapi_abi,
    ctypes.bool, // return
    DWORD, // idAttach
    DWORD, // idAttachTo
    ctypes.bool // fAttach
);

var SetForegroundWindow = user32.declare('SetForegroundWindow', ctypes.winapi_abi,
    ctypes.bool, // return BOOL
    ctypes.voidptr_t // HWND
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function startListening(worker) {
  worker.port.on('clip', function(text) {   

	  var activeWindowTitle = windows.activeWindow.title;
	  
	  console.log("Active window title is: " + activeWindowTitle);
	  console.log("title of active tab is " + tabs.activeTab.title);
	 // tabs.activeTab.activate();
//windows.activeWindow.focus();
     //focusFirefox();
       //grabFocus();
       notify();
	
    
  });
}

function focusFirefox(){
	
   Cu.import('resource://gre/modules/Services.jsm');
var browserWindow = Services.wm.getMostRecentWindow('navigator:browser');
if (!browserWindow) {
    throw new Error('No browser window found');
}

var baseWindow = browserWindow.QueryInterface(Ci.nsIInterfaceRequestor)
                              .getInterface(Ci.nsIWebNavigation)
                              .QueryInterface(Ci.nsIDocShellTreeItem)
                              .treeOwner
                              .QueryInterface(Ci.nsIInterfaceRequestor)
                              .getInterface(Ci.nsIBaseWindow);

var hwndString = baseWindow.nativeHandle;

Cu.import('resource://gre/modules/ctypes.jsm');

var user32 = ctypes.open('user32.dll');

/* http://msdn.microsoft.com/en-us/library/ms633539%28v=vs.85%29.aspx
 * BOOL WINAPI SetForegroundWindow(
 *   __in_ HWND hWnd
 * );
 */
var SetForegroundWindow = user32.declare('SetForegroundWindow', ctypes.winapi_abi,
    ctypes.bool, // return BOOL
    ctypes.voidptr_t // HWND
);

var hwnd = ctypes.voidptr_t(ctypes.UInt64(hwndString));
var rez_SetForegroundWindow = SetForegroundWindow(hwnd);

console.log('rez_SetForegroundWindow:', rez_SetForegroundWindow, rez_SetForegroundWindow.toString());

user32.close();
}
function grabFocus(){
	
	for (let tab of tabs){
           console.log(tab.title);
           var tabtitle=tab.title;
           if(tabtitle.indexOf("Questions") >-1 && tabtitle.indexOf("Newest")>-1&& tabtitle.indexOf("Stack Overflow")>-1){
           	tab.activate();
           	stealFocus();
           	console.log("activated");
           	break;
           }
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	file.initWithPath("C:\\Users\\madhawax\\Desktop\\stackoverflow\\fire.vbs");
	var args=[""];
	var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
	process.init(file);
	process.run(false, args, args.length);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

function stealFocus(){
	console.log("steal focus called");
	

    var hToDOMWindow = Services.wm.getMostRecentWindow('navigator:browser');
    if (!hToDOMWindow) {
        throw new Error('No browser window found');
    }

    var hToBaseWindow = hToDOMWindow.QueryInterface(Ci.nsIInterfaceRequestor)
        .getInterface(Ci.nsIWebNavigation)
        .QueryInterface(Ci.nsIDocShellTreeItem)
        .treeOwner
        .QueryInterface(Ci.nsIInterfaceRequestor)
        .getInterface(Ci.nsIBaseWindow);

    var hToString = hToBaseWindow.nativeHandle;
    var hTo = ctypes.voidptr_t(ctypes.UInt64(hToString));


    var hFrom = GetForegroundWindow();
    if (hFrom.isNull()) {
        var rez_SetSetForegroundWindow = SetForegroundWindow(hTo);
        console.log('rez_SetSetForegroundWindow:', rez_SetSetForegroundWindow);
        return true;
    }

    if (hTo.toString() == hFrom.toString()) {
        console.log('window is already focused');
        return true;
    }

    var pid = GetWindowThreadProcessId(hFrom, null);
    console.info('pid:', pid);

    var _threadid = GetWindowThreadProcessId(hTo, null); // _threadid is thread of my firefox id, and hTo is that of my firefox id so this is possible to do
    console.info('_threadid:', _threadid);

    if (pid == _threadid) {
        var rez_SetSetForegroundWindow = SetForegroundWindow(hTo);
        console.log('rez_SetSetForegroundWindow:', rez_SetSetForegroundWindow);
        return true;
    }

    var rez_AttachThreadInput = AttachThreadInput(_threadid, pid, true)
    console.info('rez_AttachThreadInput:', rez_AttachThreadInput);
    if (!rez_AttachThreadInput) {
        throw new Error('failed to attach thread input');
    }
    var rez_SetSetForegroundWindow = SetForegroundWindow(hTo);
    console.log('rez_SetSetForegroundWindow:', rez_SetSetForegroundWindow);

    var rez_AttachThreadInput = AttachThreadInput(_threadid, pid, false)
    console.info('rez_AttachThreadInput:', rez_AttachThreadInput);

}

function notify(){
	as.showAlertNotification(javaicon, 'StackOverflow - New Questions', 'New question apper... click to nevigate to the question', true, null, notifListener, 'StackOverflow Notifier');
}

