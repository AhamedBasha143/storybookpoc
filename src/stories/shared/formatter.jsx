export const formatDate = (dateString) => {
    if (!dateString || dateString.length !== 8) return ''; // Return an empty string if dateString is falsy or not the correct length
  
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
  
    return `${month}/${day}/${year}`;
  };

  export const toOrderStatus =  function(ovalue) {
    if (ovalue !== "B" || ovalue !== "C") {
      return "On Time";
    } else if (ovalue === "B") {
      return "Risk";
    } else {
      return "Late";
    }

  };
  export const formatQuanity =  function(value) {

    if (value > 0) {
      return Math.trunc(value);
    } else {
      return "";
    }
  };
  export const formatOrderQuantity =  function(value) {

    if (value) {
      return parseInt(value);
    } else {
      return "";
    }
  };

  export const getFontColor = (value) => {
    const nVal = value.toLowerCase().trim();
    if (nVal === 'on time') {
      return "green";
    } else if (nVal === 'late') {
      return "red";
    } else if (nVal === 'at risk' || nVal === 'risk') {
      return "orange";
    } else {
      return "white";
    }
  };
  export const formatPrice= function(value) {
    if (value) {
      return parseFloat(value).toFixed(2);

    } else {
      return 0;
    }
  };
  export const toAcknowledged =  function(value1, value2) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    if (value1 > value2) {
      return value1;
    } else {
      return value2;
    }
  }; 

  export const toWholeNumberShipped =  function(sValue) {
    if (sValue) {
      if (parseInt(sValue) === 0) {
        return " ";
      } else {
        return parseInt(sValue);
      }
    }
  };


  export const toReceived =   function(received, ack, orderqty) {
    var value1 = parseInt(received);
    var value2 = parseInt(ack);
    //            var value3 = parseInt(inack);
    var value4 = parseInt(orderqty);
    if ((value1 === value4) && (value2 > 0)) {
      return value4;
    } else if (value1 > 0) {
      return value1;
    } else {
      return "";
    }

  };

  export const toFirmed =  function(value1, value2, value3) {

    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);

    if (value2 > 0) {
      return value2; //show icon when orderQTY
    } else if (value1 > 0 && value1 < value3 && value2 <= 0) {
      return value1;
    } else if (value1 >= value3) {
      return value3;
    } else {
      return "";
    }

  };

  export const toReadyToShip =  function(readytoShip, outfordelivery, orderqty) {
    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return value1;
    } else if (value2 > 0 & value2 < value3) {
      return value2;
    } else if (value2 >= value3) {
      return value3;
    } else {
      return "";
    }
  };

  export const checkContainerOder = function(val) {
    if (val === null || val === '') {
      return false;
    }
    return true;
  };
  
  export const checkNonContainerOder = function(val) {
    if (val === null || val === '') {
      return true;
    }
    return false;
  };

  export const toAcknowledgedIcon =   function(Ack, Order) {

    if (Ack > 0) {
      return 'hidden';
    } else {
      return 'inline-block';
    }
  };

  export const toAcknowledgedText =   function(Ack, Order) {

    if (Ack > 0) {
      return 'inline-block';
    } else {
      return 'hidden';
    }
  };

 

  export const toReceivedText =   function(received, ack, orderqty) {
    var value1 = parseInt(received);
    var value2 = parseInt(ack);
    //            var value3 = parseInt(inack);
    var value4 = parseInt(orderqty);
    if ((value1 === value4) && (value2 > 0)) {
      return "hidden";
    } else if (value1 > 0) {
      return 'inline-block';
    } else {
      return 'inline-block';
    }

  };

  export const toReceivedIcon =   function(received, ack, orderqty) {
    var value1 = parseInt(received);
    var value2 = parseInt(ack);
    //            var value3 = parseInt(inack);
    var value4 = parseInt(orderqty);
    if ((value1 === value4) && (value2 > 0)) {
      return 'inline-block';
    } else if (value1 > 0) {
      return 'hidden';
    } else {
      return 'hidden';
    }

  };


  export const toDCText =   function(value1, value2, value3) {

    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value2 > 0) {
      return value2;
    } else {
      return "";
    }
  };

  export const toFirmedIcon =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value1 >= value3) {
      return true; //show icon when orderQTY
    } else if ((value1 + value2) <= value3 & (value1 + value2) > 0) {
      return false;
    } else {
      return false;
    }
  };

  export const toFirmedIconDC =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value2 > 0) {
      return false; //show icon when orderQTY
    } else if (value1 > 0 && value1 < value3 && value2 <= 0) {
      return true;
    } else {
      return false;
    }
  };

  export const toIconDCGrey =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value2 > 0) {
      return 'hidden'; //show icon when orderQTY
    } else if (value1 > 0 && value1 < value3 && value2 <= 0) {
      return 'inline-block';
    } else {
      return 'hidden';
    }
  };

  export const toIconDCDark =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value2 > 0) {
      return 'hidden'; //show icon when orderQTY
    } else if (value1 > 0 && value1 < value3 && value2 <= 0) {
      return 'hidden';
    } else if (value1 >= value3) {
      return 'inline-block';
    } else {
      return 'hidden';
    }
  };

  export const toDCTextVisible =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value2 > 0) {
      return 'inline-block'; //show icon when orderQTY
    } else if (value1 > 0 && value1 < value3 && value2 <= 0) {
      return 'hidden';
    } else if (value1 >= value3) {
      return 'hidden';
    } else {
      return 'inline-block';
    }
  };

  export const toFirmedText =   function(value1, value2, value3) {
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = parseInt(value3);
    if (value1 >= value3) {
      return false; //do not show when order qunatity
    } else if ((value1 + value2) < value3 && (value1 + value2) > 0) {
      return true;
    } else {
      return true;
    }
  };
  
  
  export const toReadyToShipIcon =   function(readytoShip, outfordelivery, orderqty) {
    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return false;
    } else if (value2 > 0 & value2 < value3) {
      return false;
    } else if (value2 >= value3) {
      return true; //show icon when return orderQTY
    } else {
      return false;
    }
  };

  export const toIconRSGrey =   function(readytoShip, outfordelivery, orderqty) {

    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return false;
    } else if (value2 > 0 && value2 < value3 && value1 <= 0) {
      return true;
    } else if (value2 >= value3) {
      return false; //show icon when return orderQTY
    } else {
      return false;
    }
  };

  export const toIconRSDark =   function(readytoShip, outfordelivery, orderqty) {

    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return false;
    } else if (value2 > 0 && value2 < value3 && value1 <= 0) {
      return false;
    } else if (value2 >= value3) {
      return true; //show icon when return orderQTY
    } else {
      return false;
    }
  };

  export const toReadyToShipText =   function(readytoShip, outfordelivery, orderqty) {
    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return true;
    } else if (value2 > 0 & value2 < value3) {
      return true;
    } else if (value2 >= value3) {
      return false; //DO NOT show icon when orderQTY
    } else {
      return true;
    }
  };

  export const toReadyToShipTextVisible =   function(readytoShip, outfordelivery, orderqty) {
    var value1 = parseInt(readytoShip);
    var value2 = parseInt(outfordelivery);
    var value3 = parseInt(orderqty);
    if (value1 > 0) {
      return true;
    } else if (value2 > 0 & value2 < value3) {
      return false;
    } else if (value2 >= value3) {
      return false; //DO NOT show icon when orderQTY
    } else {
      return false;
    }
  };
  export const fromatDateInSheet1 =  function(ds) {
    if (ds !== null && ds !== undefined)
      ds = ds.replaceAll('-', '');
    if (ds) {
      if (ds === "" || ds === "#" || ds === '00000000' || ds === null || ds === undefined) {
        return '';
      } else {
        if (ds.includes("/")) {
          return new Date(ds);
        } else {
          return new Date(ds.substr(4, 2) + "/" + ds.substr(6, 2) + "/" + ds.substr(0, 4));
        }

      }
    }
  };

  export const reomveBOLDuplicates =  function(arr, keys) {
    let unique = {};
    let result = [];

    for (const obj of arr) {
      let key = keys.map(k => obj[k]).join('|');
      if (!unique[key]) {
        result.push(obj);
        unique[key] = true;
      }
    }

    return result;
  };

  export const toShipmentDateText =  function (status, date, actualdate) {
    if (status === '3') {
      actualdate = actualdate.substr(4, 2) + "/" + actualdate.substr(6, 2) + "/" + actualdate.substr(0, 4);
      return "Shipped Date: " + actualdate;
    } else if (status === '5') {
      actualdate = actualdate.substr(4, 2) + "/" + actualdate.substr(6, 2) + "/" + actualdate.substr(0, 4);
      return "Shipped Date: " + actualdate;
    } else {
      date = date.substr(4, 2) + "/" + date.substr(6, 2) + "/" + date.substr(0, 4);
      return "Expected Shipping: " + date;
    }

  };

  export const formatStatusShipping =  function(status) {
    var statTxt = '';
    switch (status) {

      case "1":
        statTxt = 'Tendered';
        break;
      case "2":
        statTxt = 'In DC Load Cycle';
        break;
      case "3":
        statTxt = 'Shipped';
        break;
      case "4":
        statTxt = 'Available to Plan';
        break;
      case "5":
        statTxt = 'Delivered';
        break;
      default:
        statTxt = status;
    }
    return statTxt;
  };
  export const lateStatFormatter = function(val, val2) {
    if (val) {
      var nVal = val.trim();

      if (val2 !== '3' && val2 !== '5') {
        if (nVal === 'A') {
          return "green";
        } else if (nVal === 'C') {
          return "red";
        } else if (nVal === 'B') {
          return "orange";
        } else {
          return "black";
        }
      }
    } else {
      return "black";
    }
  };

  export const lateStatFormatterTxt =  function(val) {
    if (val) {
      var nVal = val.trim();
      if (nVal === 'A') {
        return "On Time";
      } else if (nVal === 'C') {
        return "Late";
      } else if (nVal === 'B') {
        return "At Risk";
      } else {
        return val;
      }
    }
  };
  export const toShipmentDetailDateText =  function(status, date, actualdate) {
    if (status === '3' || status === '5') {
      if (actualdate === null || actualdate === "" || actualdate === "#" || actualdate === '00000000' || date === undefined) {
        return '';
      } else {
        return actualdate.substr(4, 2) + "/" + actualdate.substr(6, 2) + "/" + actualdate.substr(0, 4);
      }
    } else {
      if (date === null || date === "" || date === "#" || date === '00000000' || date === undefined) {
        return '';
      } else {
        return date.substr(4, 2) + "/" + date.substr(6, 2) + "/" + date.substr(0, 4);
      }
    }
  };
  export const fromatDateTimeInSheetInclude = function(ds) {
    if (ds) {
      if (ds === "" || ds === "#" || ds === '00000000') {
        return '';
      } else {
        var str = '';
        var eg = '';
        if (parseInt(ds.substr(8, 2)) > 12) {
          str = parseInt(ds.substr(8, 2)) - 12;
          eg = ' PM';

        } else {
          str = ds.substr(8, 2);
          eg = ' AM';
        }
        return ds.substr(4, 2) + "/" + ds.substr(6, 2) + "/" + ds.substr(0, 4) + " " + str + ":" + ds.substr(10, 2) + ":" + ds.substr(12,
          2) + eg + '';
        // }
      }
    }
  };
  export const toShipmentDetailText =  function(status, date, actualdate) {
    if (status === 'Shipped' || status === 'Delivered') {
      return "Shipped Date";
    } else {
      return "Expected Shipping Date";
    }
  };
  