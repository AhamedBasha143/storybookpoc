
export const generateHeader = function(headerName,selectedFields){
    if(headerName === 'OpenOrderList'){
        return [
            {label:'Customer',key:'ZCUSTOMER_T'},
            {label:'Purchase Order',key:'A4ZSDL_CP06ZBSTNK'},
            {label:'SAP Order#',key:'A0DOC_NUMBER'},
            {label:'Order Quantity',key:'A006NZKS3HHO0HMHU0WEM9HHRY'},
            {label:'Order Value',key:'A006NZKS3HHO27WANF8EB8H9WA'},
            {label:'Open Quantity',key:'A00O2TFBIHKALXH7O501P3PU1K'},
            {label:'Order Date',key:'ZCALDAY'},
            {label:'Latest CPSD',key:'A0SCL_DELDAT'},
            {label:'CPSD Change',key:'A4ZSDL_CP06CPSD_HD_CH_I'},
            {label:'Split Lines',key:'A4ZSDL_CP06SPLIT_LINE_0'},
            {label:'Days Late',key:'A006NZKS3HHO0HMHSL4TGCYDDI'},
            {label:'Hold Code',key:'A0DEL_BLOCK_T'},
            {label:'Internal Tollgate',key:'ZTOLLGATE_T'},
            {label:'External Tollgate',key:'ZEXT_HDR_T'},
            {label:'Ship To',key:'ZSHIP_TO_T'},
            {label:'Ship To Key',key:'ZSHIP_TO'},
            {label:'Ship To Location',key:'A0ADDR_SH_S'},
            {label:'Ship-To Name',key:'A4ZSDL_CP064ZSDL_O08_SH'},
            {label:'Division',key:'A0DIVISION'},
            {label:'Consignee PO',key:'A4ZSDL_CP06ZZIHREZ'},
            {label:'Sales Doc. Type',key:'A0DOC_TYPE'},
            {label:'No Partial Delivery',key:'ZAUTLF'},
            {label:'Delivery Block',key:'ZDELBLK'},
            {label:'Shipping Condition',key:'ZSHP_COND'},
            {label:'Total Order Value',key:'A006NZKS3HHO27WANF8EB8H9WA'},
            {label:'CSR Name',key:'ZPERSON'},
            {label:'National Account',key:'ZZN_PART'},
            {label:'CRSD Header',key:'A4ZSDL_CP06CRSD_HDR_VDU'},
        
        ]
           
    } else if(headerName === 'ATPView'){
        return [
            {label:'Material',key:'ZMATERIAL'},
            {label:'Plant',key:'ZPLANT_T'},
            {label:'ATP Date',key:'ZATP_DT1'},
            {label:'ATP Date2',key:'ZATP_DT1'},
            {label:'ATP Qty',key:'A00O2TFBIHKALXHWMV8JFH2QYK'},
            {label:'ATP Qty01',key:'A00O2TFBIHKALXHWMV8JFH2XA4'},
            {label:'ATP Qty02',key:'A00O2TFBIHKALXHWMV8JFH33LO'},
            {label:'Units in DC Cycle(Delivery Ticket)',key:'A00O2TFBIHKALXHWMV8JFH162K'},
            {label:'Current Month Backlog',key:'A00O2TFBIHKALXHWMV8JFH1IPO'},
            {label:'Current Month Backlog(on Hold)',key:'A00O2TFBIHKALXHWMV8JFH1P18'},
            {label:'Orders in Reach Period',key:'A00O2TFBIHKALXHWMV8JFH45J0'},
            {label:'Total Open Production Schedule Qty',key:'A00O2TFBIHKALXHWMV8JFH39X8'},
            {label:'Current Month Open Production Schedule Qty',key:'A00O2TFBIHKALXHWMV8JFH3G8S'},
            {label:'Next Month (1st half) Open Production Schedule Qty',key:'A00O2TFBIHKALXHWMV8JFH3MKC'},
            {label:'Next Month (2nd half) Open Production Schedule Qty',key:'A00O2TFBIHKALXHWMV8JFH3SVW'},
        ]
    } else if(headerName === 'itemDetails') {
        return [
            {label:'Customer',key:'ZCUSTOMER_T'},
            {label:'Purchase Order',key:'A4ZSDL_CP06ZBSTNK'},
            {label:'Order #',key:'A0DOC_NUMBER'},
            {label:'Item',key:'A0SORD_ITEM'},
            {label:'DC',key:'ZPLANT_T'},
            {label:'Material',key:'ZMATENTRD'},
            {label:'Material Description',key:'ZMATERIAL_T'},
            {label:'Material Type',key:'A0MATL_TYPE'},
            {label:'Freight Type',key:'A0SHIPPTYP_T'},
            {label:'Ship To Location',key:'A0ADDR_SH_S_T'},
            {label:'Ship To Key',key:'ZSHIP_TO'},
            {label:'Order Date',key:'ZCALDAY'},
            {label:'CRSD',key:'ZCRSDTE'},
            {label:'CRSD Header',key:'A4ZSDL_CP06CRSD_HDR_VDU'},
            {label:'Latest CPSD',key:'ZEDATUMAX'},
            {label:'CPSD Change',key:'A4ZSDL_CP06CPSD_CHANGE'},
            {label:'Target Shipping Date',key:'A0PLD_GI_DTE'},
            {label:'Material Availability Date',key:'ZMTAV_DTE'},
            {label:'One Time Status',key:'A4ZSDL_CP06TXT_OT_IND_I'},
            {label:'Split Lines',key:'A4ZSDL_CP06SPLIT_LINES'},
            {label:'Latest Delivery Number',key:'A0DELIV_NUMB'},
            {label:'Latest Delivery Ticket',key:'A4ZSDL_CP06DEL_ERDAT_MA'},
            {label:'Latest Actual Goods Issue Date',key:'A4ZSDL_CP06WADAT_IST_MA'},
            {label:'Latest BOL',key:'A4ZSDL_CP06EXTI1_MAX'},
            {label:'Latest Tracking Id',key:'A4ZSDL_CP06TNDR_TRKID'},
            {label:'Ordre Value',key:'A006NZKS3HHO27WANNHAS4G809'},
            {label:'Order Quantity',key:'A006NZKS3HHO27WANNHAS47SLL'},
            {label:'Received',key:'A006NZKS3HHO27WANNHAS47SLL,A006NZKS3HHO27WANNHAS48HVT,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'Ackknowledged',key:'A006NZKS3HHO27WANNHAS48HVT,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'Firmed',key:'A05QKSHWV712FNJ30UFHGYYIDV,A05QKSHWV712FNJ30UFHGYYIDV,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'In Production',key:'A006NZKS3HHO27WANNHAS49761,A006NZKS3HHO27WANNHAS49761,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'In Transit',key:'A006NZKS3HHO27WANNHAS4A2RT,A006NZKS3HHO27WANNHAS4A2RT,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'In Inventory',key:'A006NZKS3HHO27WANNHAS4AFEX,A006NZKS3HHO27WANNHAS4AFEX,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'DC Load Cycle',key:'A006NZKS3HHO27WANNHAS4BB0P,A006NZKS3HHO27WANNHAS4BB0P,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'Ready to Ship',key:'A006NZKS3HHO27WANNHAS4AYDL,A006NZKS3HHO27WANNHAS4B4P5,A006NZKS3HHO27WANNHAS47SLL'},
            {label:'Shipped',key:'A006NZKS3HHO27WANNHAS4B4P5'},
            {label:'Invoiced',key:'A006NZKS3HHO27WANNHAS4HMKP'},
            {label:'Allocation Indicator(Residential)',key:'A4ZSDL_CP06ALLOCN_INDIC'},
        ]
    } else if(headerName === 'ShippingHistory'){
        return [
            {label:'Material Key',key:'ZMATERIAL'},
            {label:'Material Description',key:'ZMATERIAL_T'},
            {label:'Ship to Location',key:'A0ADDR_SH_S_T'},
            {label:'Current Year Quantity',key:'A006NZKS3HHO27WAPEOBU2RCG3'},
            {label:'Previous Year Quantity',key:'A006NZKS3HHO27WAPEOBU2R64J'},
        ]
    }
}