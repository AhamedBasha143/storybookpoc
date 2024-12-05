import React from 'react';
import ExcelDownloadButton from './ExcelDownloadButton'; // Adjust this path


// Sample data for the story
const sampleData = {
    "OpenOrderList": [
    {
      "ZTOLL_ITM_T": "Firmed",
      "A00O2TFBIHKANNR5PA836B51DK": 5,
      "A4ZSDL_CP06TXT_OT_IND_I": "Late",
      "A0DEL_BLOCK_T": "Not Assigned",
      "ZCUSTOMER_T": "MINGLEDORFFS INC_Colle",
      "A4ZSDL_CP06ZBSTNK": "1583817",
      "A0DOC_NUMBER": "4060385",
      "A006NZKS3HHO0HMHU0WEM9HHRY": 17,
      "A006NZKS3HHO27WANF8EB8H9WA": 7641.45,
      "A00O2TFBIHKALXH7O501P3PU1K": 5,
      "ZCALDAY": "20220923",
      "A0SCL_DELDAT": "20240425",
      "A4ZSDL_CP06CPSD_HD_CH_I": "N",
      "A4ZSDL_CP06SPLIT_LINE_0": "Y",
      "A006NZKS3HHO0HMHSL4TGCYDDI": 717,
      "A0DEL_BLOCK": "Not Assigned",
      "ZTOLLGATE_T": "Firmed",
      "ZEXT_HDR_T": "2nd Day Air",
      "ZSHIP_TO_T": "MINGLEDORFF'S INC.",
      "A4ZSDL_CP06SLOC_HD": "COLUMBUS-GA",
      "ZSHIP_TO": "209762",
      "A0ADDR_SH_S": "COLUMBUS-GA",
      "A4ZSDL_CP064ZSDL_O08_SH": "MINGLEDORFF'S INC.",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZZIHREZ": "ACCESSORIES",
      "A0DOC_TYPE": "ZOR",
      "ZAUTLF": "",
      "ZDELBLK": "Not Assigned",
      "ZSHP_COND": "Standard",
      "ZPERSON": null,
      "ZPERSON_T": null,
      "ZZN_PART": "",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20220924"
    },
    {
      "ZTOLL_ITM_T": "Firmed",
      "A00O2TFBIHKANNR5PA836B51DK": 5,
      "A4ZSDL_CP06TXT_OT_IND_I": "Late",
      "A0DEL_BLOCK_T": "Not Assigned",
      "ZCUSTOMER_T": "MINGLEDORFFS INC_Colle",
      "A4ZSDL_CP06ZBSTNK": "1583818",
      "A0DOC_NUMBER": "4060386",
      "A006NZKS3HHO0HMHU0WEM9HHRY": 17,
      "A006NZKS3HHO27WANF8EB8H9WA": 7641.45,
      "A00O2TFBIHKALXH7O501P3PU1K": 5,
      "ZCALDAY": "20220923",
      "A0SCL_DELDAT": "20240425",
      "A4ZSDL_CP06CPSD_HD_CH_I": "N",
      "A4ZSDL_CP06SPLIT_LINE_0": "Y",
      "A006NZKS3HHO0HMHSL4TGCYDDI": 717,
      "A0DEL_BLOCK": "Not Assigned",
      "ZTOLLGATE_T": "Firmed",
      "ZEXT_HDR_T": "Order Confirmed",
      "ZSHIP_TO_T": "MINGLEDORFF'S INC.",
      "A4ZSDL_CP06SLOC_HD": "COLUMBUS-GA",
      "ZSHIP_TO": "209762",
      "A0ADDR_SH_S": "COLUMBUS-GA",
      "A4ZSDL_CP064ZSDL_O08_SH": "MINGLEDORFF'S INC.",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZZIHREZ": "ACCESSORIES",
      "A0DOC_TYPE": "ZOR",
      "ZAUTLF": "",
      "ZDELBLK": "Not Assigned",
      "ZSHP_COND": "Standard",
      "ZPERSON": null,
      "ZPERSON_T": null,
      "ZZN_PART": "",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20220924"
    },
    {
      "ZTOLL_ITM_T": "Firmed",
      "A00O2TFBIHKANNR5PA836B51DK": 5,
      "A4ZSDL_CP06TXT_OT_IND_I": "Late",
      "A0DEL_BLOCK_T": "Not Assigned",
      "ZCUSTOMER_T": "MINGLEDORFFS INC_Colle",
      "A4ZSDL_CP06ZBSTNK": "1583819",
      "A0DOC_NUMBER": "4060387",
      "A006NZKS3HHO0HMHU0WEM9HHRY": 17,
      "A006NZKS3HHO27WANF8EB8H9WA": 7641.45,
      "A00O2TFBIHKALXH7O501P3PU1K": 5,
      "ZCALDAY": "20220923",
      "A0SCL_DELDAT": "20240425",
      "A4ZSDL_CP06CPSD_HD_CH_I": "N",
      "A4ZSDL_CP06SPLIT_LINE_0": "Y",
      "A006NZKS3HHO0HMHSL4TGCYDDI": 717,
      "A0DEL_BLOCK": "Not Assigned",
      "ZTOLLGATE_T": "Firmed",
      "ZEXT_HDR_T": "Order Confirmed",
      "ZSHIP_TO_T": "MINGLEDORFF'S INC.",
      "A4ZSDL_CP06SLOC_HD": "COLUMBUS-GA",
      "ZSHIP_TO": "209762",
      "A0ADDR_SH_S": "COLUMBUS-GA",
      "A4ZSDL_CP064ZSDL_O08_SH": "MINGLEDORFF'S INC.",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZZIHREZ": "ACCESSORIES",
      "A0DOC_TYPE": "ZOR",
      "ZAUTLF": "",
      "ZDELBLK": "Not Assigned",
      "ZSHP_COND": "Standard",
      "ZPERSON": null,
      "ZPERSON_T": null,
      "ZZN_PART": "",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20220924"
    },
    {
      "ZTOLL_ITM_T": "Firmed",
      "A00O2TFBIHKANNR5PA836B51DK": 5,
      "A4ZSDL_CP06TXT_OT_IND_I": "Late",
      "A0DEL_BLOCK_T": "Not Assigned",
      "ZCUSTOMER_T": "MINGLEDORFFS INC_Colle",
      "A4ZSDL_CP06ZBSTNK": "1583820",
      "A0DOC_NUMBER": "4060388",
      "A006NZKS3HHO0HMHU0WEM9HHRY": 17,
      "A006NZKS3HHO27WANF8EB8H9WA": 7641.45,
      "A00O2TFBIHKALXH7O501P3PU1K": 5,
      "ZCALDAY": "20220923",
      "A0SCL_DELDAT": "20240425",
      "A4ZSDL_CP06CPSD_HD_CH_I": "N",
      "A4ZSDL_CP06SPLIT_LINE_0": "Y",
      "A006NZKS3HHO0HMHSL4TGCYDDI": 717,
      "A0DEL_BLOCK": "Not Assigned",
      "ZTOLLGATE_T": "Firmed",
      "ZEXT_HDR_T": "Order Confirmed",
      "ZSHIP_TO_T": "MINGLEDORFF'S INC.",
      "A4ZSDL_CP06SLOC_HD": "COLUMBUS-GA",
      "ZSHIP_TO": "209762",
      "A0ADDR_SH_S": "COLUMBUS-GA",
      "A4ZSDL_CP064ZSDL_O08_SH": "MINGLEDORFF'S INC.",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZZIHREZ": "ACCESSORIES",
      "A0DOC_TYPE": "ZOR",
      "ZAUTLF": "",
      "ZDELBLK": "Not Assigned",
      "ZSHP_COND": "Standard",
      "ZPERSON": null,
      "ZPERSON_T": null,
      "ZZN_PART": "",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20220924"
    },
    {
      "ZTOLL_ITM_T": "Firmed",
      "A00O2TFBIHKANNR5PA836B51DK": 5,
      "A4ZSDL_CP06TXT_OT_IND_I": "Late",
      "A0DEL_BLOCK_T": "Not Assigned",
      "ZCUSTOMER_T": "MINGLEDORFFS INC_Colle",
      "A4ZSDL_CP06ZBSTNK": "1583821",
      "A0DOC_NUMBER": "4060389",
      "A006NZKS3HHO0HMHU0WEM9HHRY": 17,
      "A006NZKS3HHO27WANF8EB8H9WA": 7641.45,
      "A00O2TFBIHKALXH7O501P3PU1K": 5,
      "ZCALDAY": "20220923",
      "A0SCL_DELDAT": "20240425",
      "A4ZSDL_CP06CPSD_HD_CH_I": "N",
      "A4ZSDL_CP06SPLIT_LINE_0": "Y",
      "A006NZKS3HHO0HMHSL4TGCYDDI": 717,
      "A0DEL_BLOCK": "Not Assigned",
      "ZTOLLGATE_T": "Firmed",
      "ZEXT_HDR_T": "Order Confirmed",
      "ZSHIP_TO_T": "MINGLEDORFF'S INC.",
      "A4ZSDL_CP06SLOC_HD": "COLUMBUS-GA",
      "ZSHIP_TO": "209762",
      "A0ADDR_SH_S": "COLUMBUS-GA",
      "A4ZSDL_CP064ZSDL_O08_SH": "MINGLEDORFF'S INC.",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZZIHREZ": "ACCESSORIES",
      "A0DOC_TYPE": "ZOR",
      "ZAUTLF": "",
      "ZDELBLK": "Not Assigned",
      "ZSHP_COND": "Standard",
      "ZPERSON": null,
      "ZPERSON_T": null,
      "ZZN_PART": "",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20220924"
    }
  ],
  "ItemData": [
    {
      "A0MATL_TYPE": "",
      "A0SHIPPTYP_T": "Standard Freight",
      "A0PLD_GI_DTE": "20221014",
      "A006NZKS3HHO27WANNHAS4HSW9": 0,
      "A00O2TFBIHKAM1JLVDPI0UV2Z3": 21607.8,
      "A006NZKS3HHO27WANNHAS4GXAH": 0,
      "A006NZKS3HHO27WANNHAS4G809": 21607.8,
      "A006NZKS3HHO27WANNHAS4H9XL": 21607.8,
      "A006NZKS3HHO27WANNHAS4H3M1": 21607.8,
      "A006NZKS3HHO27WANNHAS47SLL": 1,
      "A006NZKS3HHO27WANNHAS48O7D": 1,
      "A05QKSHWV712FNJ30UFHGYYIDV": 0,
      "A006NZKS3HHO27WANNHAS490UH": 1,
      "A006NZKS3HHO27WANNHAS49761": 0,
      "A006NZKS3HHO27WANNHAS49WG9": 1,
      "A006NZKS3HHO27WANNHAS4A2RT": 0,
      "A006NZKS3HHO27WANNHAS4A93D": 1,
      "A006NZKS3HHO27WANNHAS4AFEX": 0,
      "A006NZKS3HHO27WANNHAS4AS21": 1,
      "A006NZKS3HHO27WANNHAS4BB0P": 0,
      "A006NZKS3HHO27WANNHAS4AYDL": 0,
      "A006NZKS3HHO27WANNHAS4B4P5": 1,
      "A006NZKS3HHO27WANNHAS4CPL5": 0,
      "A006NZKS3HHO27WANNHAS48HVT": 0,
      "A006NZKS3HHO27WANNHAS4HMKP": 1,
      "A00O2TFBIHKANNR5PA836B51DK": 0,
      "A0TEL_NUMBER": "4044466311",
      "ZCITY": "NORCROSS",
      "A0REGION_T": "GA",
      "ZSHIP_TO": "999999",
      "ZPERSON_T": "Nikki Bailey",
      "ZUSR_LNG": "",
      "A4ZSDL_CP06ZWONUM": null,
      "ZRSM_T": null,
      "ZCUSTOMER": "20080",
      "ZCUSTOMER_T": "MINGLEDORFFS INC",
      "ZCUSTOMER1": "MINGLEDORFFS INC",
      "A4ZSDL_CP06ZBSTNK": "1590661",
      "A0DOC_NUMBER": "5566217",
      "A0SORD_ITEM": 10,
      "A4ZSDL_CP06ADD_DESC": "",
      "A4ZSDL_CP06ALLOCN_INDIC": "No",
      "A4ZSDL_CP06BOL_INSTRUCT": "CALL NICK TATUM AT 251.282.7741 48 HRS PRIOR TO DELIVERY",
      "ZFI_BRAND_T": "CAR",
      "A4ZSDL_CP06SALES_ORD_IT": "556621710",
      "A4ZSDL_CP06ZZIHREZ": "",
      "A0COUNTRY": "US",
      "A4ZSDL_CP06CPSD_CHANGE": "N",
      "ZCRSDTE": "20221013",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20221013",
      "ZPERSON": "Nikki Bailey",
      "ZPLANT_T": "Charlotte Plant",
      "ZDELVGRP_T": "000",
      "A0DLV_PRIO_T": "00",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZF_PART": "msanders@mingledorffs.com",
      "A4ZSDL_CP06ZU_PART": "jhartner@mingledorffs.com",
      "A4ZSDL_CP06FRWAGENT_T": "Network Transport",
      "ZDELBLK_T": "Not Assigned",
      "A0DEL_BLOCK_T": "Not Assigned",
      "A0INCOTERMS": "PPD",
      "A0DLV_BLOCK": "",
      "ZEXT_ITM_T": "Invoiced",
      "ZTOLL_ITM_T": "Invoiced",
      "ZKTEXT1": "",
      "A4ZSDL_CP06EXTI1_MAX": "CLT1502570",
      "ZEDATUMAX": "20221018",
      "A0DELIV_NUMB": "0077702502",
      "A4ZSDL_CP06DEL_ERDAT_MA": "20221014",
      "A4ZSDL_CP06FKDAT_MAX": "20221018",
      "A4ZSDL_CP06EXTI2": "W2240T100",
      "A4ZSDL_CP06TNDR_TRKID": "",
      "A4ZSDL_CP06ZMANUF_PLANT_T": null,
      "A4ZSDL_CP06MARKED_FOR": "",
      "ZMKTSEG_T": "",
      "ZMATENTRD": "38APS04065-12020",
      "ZMTAV_DTE": "20221014",
      "A4ZSDL_CP06ZMAT_DESC": "COMMERCIAL SPLITS",
      "ZMATERIAL_T": "COMMERCIAL SPLITS",
      "ZTRATY": "",
      "A4ZSDL_CP06MULTI_FACT_N": "10/17 RTG CONF NICK 251-281-7741 (TW)",
      "A4ZSDL_CP064ZSDL_O08_NA": "",
      "ZAUTLF": "",
      "A4ZSDL_CP06TXT_OT_IND_I": "On Time",
      "A4ZSDL_CP06EMAIL_ADD": "cindytaylor@mingledorffs.com",
      "OpenQuantityTolgate": 0,
      "ZCALDAY": "20221012",
      "A0PMNTTRMS": "DOM1",
      "A0PMNTTRMS_T": "1.65% CAR & BRY SCH A",
      "A4ZSDL_CP06POLINE_ITM": "000010",
      "A4ZSDL_CP06PRSDT": "20221012",
      "ZPHL3_GRP_T": "LARGE SPLITS",
      "receivedQty": 1,
      "A0REFER_ITM": "",
      "A0REF_DOC_NR": "0045837867",
      "A4ZSDL_CP06PERNR_Y1": "",
      "ZSHP_COND_T": "Standard",
      "ZSHIP_TO_T": "ONE TIME SHIP TO - DOMESTIC  (non-t",
      "A0ADDR_SH_S_T": "MONROEVILLE-AL",
      "A0ADDR_SH_S": "MONROEVILLE-AL",
      "A0SHIPPTYP": "Standard Freight",
      "A4ZSDL_CP064ZSDL_O08_0": "Conrad Watson AC",
      "ZSDBW_T": "",
      "A4ZSDL_CP06SPLIT_LINES": "N",
      "A4ZSDL_CP06STREET_VI": "4100 COUNTY ROAD 5",
      "ZCPSDATE": "20221014",
      "ZMATERIAL__ZMATL_GRP_T": "ELLIJAY WSHP",
      "ZMATERIAL__ZMATL_GRP": "1254",
      "A4ZSDL_CP06POST_CODE_VI": "36460",
      "A4ZSDL_CP06WADAT_IST_MA": "20221018",
      "A4ZSDL_CP06CPSD_ITM_CAL_X": "OCT 2022",
      "A4ZSDL_CP06CPSD_ITM_CAL": "202210",
      "A4ZSDL_CP06CRSD_CALMONT": "202210",
      "A4ZSDL_CP06CRSD_CALMONT_T": "10/2022",
      "A4ZSDL_CP06CRSD_MONTH_T": "OCT",
      "A4ZSDL_CP06CRSD_YEAR": "2022",
      "ZTGLE_IND": "C",
      "A4ZSDL_CP06CONT_DI": null,
      "A0DOC_TYPE": "ZOR",
      "Customer_Model": "",
      "A4ZSDL_CP06LATST_ALLOCN": "No"
    },
    {
      "A0MATL_TYPE": "",
      "A0SHIPPTYP_T": "Standard Freight",
      "A0PLD_GI_DTE": "20221014",
      "A006NZKS3HHO27WANNHAS4HSW9": 0,
      "A00O2TFBIHKAM1JLVDPI0UV2Z3": 21607.8,
      "A006NZKS3HHO27WANNHAS4GXAH": 0,
      "A006NZKS3HHO27WANNHAS4G809": 21607.8,
      "A006NZKS3HHO27WANNHAS4H9XL": 21607.8,
      "A006NZKS3HHO27WANNHAS4H3M1": 21607.8,
      "A006NZKS3HHO27WANNHAS47SLL": 1,
      "A006NZKS3HHO27WANNHAS48O7D": 1,
      "A05QKSHWV712FNJ30UFHGYYIDV": 0,
      "A006NZKS3HHO27WANNHAS490UH": 1,
      "A006NZKS3HHO27WANNHAS49761": 0,
      "A006NZKS3HHO27WANNHAS49WG9": 1,
      "A006NZKS3HHO27WANNHAS4A2RT": 0,
      "A006NZKS3HHO27WANNHAS4A93D": 1,
      "A006NZKS3HHO27WANNHAS4AFEX": 0,
      "A006NZKS3HHO27WANNHAS4AS21": 1,
      "A006NZKS3HHO27WANNHAS4BB0P": 0,
      "A006NZKS3HHO27WANNHAS4AYDL": 0,
      "A006NZKS3HHO27WANNHAS4B4P5": 1,
      "A006NZKS3HHO27WANNHAS4CPL5": 0,
      "A006NZKS3HHO27WANNHAS48HVT": 0,
      "A006NZKS3HHO27WANNHAS4HMKP": 1,
      "A00O2TFBIHKANNR5PA836B51DK": 0,
      "A0TEL_NUMBER": "4044466311",
      "ZCITY": "NORCROSS",
      "A0REGION_T": "GA",
      "ZSHIP_TO": "999999",
      "ZPERSON_T": "Nikki Bailey",
      "ZUSR_LNG": "",
      "A4ZSDL_CP06ZWONUM": null,
      "ZRSM_T": null,
      "ZCUSTOMER": "20080",
      "ZCUSTOMER_T": "MINGLEDORFFS INC",
      "ZCUSTOMER1": "MINGLEDORFFS INC",
      "A4ZSDL_CP06ZBSTNK": "1583817",
      "A0DOC_NUMBER": "4060385",
      "A0SORD_ITEM": 30,
      "A4ZSDL_CP06ADD_DESC": "",
      "A4ZSDL_CP06ALLOCN_INDIC": "No",
      "A4ZSDL_CP06BOL_INSTRUCT": "CALL NICK TATUM AT 251.282.7741 48 HRS PRIOR TO DELIVERY",
      "ZFI_BRAND_T": "CAR",
      "A4ZSDL_CP06SALES_ORD_IT": "556621710",
      "A4ZSDL_CP06ZZIHREZ": "",
      "A0COUNTRY": "US",
      "A4ZSDL_CP06CPSD_CHANGE": "N",
      "ZCRSDTE": "20221013",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20221013",
      "ZPERSON": "Nikki Bailey",
      "ZPLANT_T": "Charlotte Plant",
      "ZDELVGRP_T": "000",
      "A0DLV_PRIO_T": "00",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZF_PART": "msanders@mingledorffs.com",
      "A4ZSDL_CP06ZU_PART": "jhartner@mingledorffs.com",
      "A4ZSDL_CP06FRWAGENT_T": "Network Transport",
      "ZDELBLK_T": "Not Assigned",
      "A0DEL_BLOCK_T": "Not Assigned",
      "A0INCOTERMS": "PPD",
      "A0DLV_BLOCK": "",
      "ZEXT_ITM_T": "Invoiced",
      "ZTOLL_ITM_T": "Invoiced",
      "ZKTEXT1": "",
      "A4ZSDL_CP06EXTI1_MAX": "CLT1502570",
      "ZEDATUMAX": "20221018",
      "A0DELIV_NUMB": "0077702502",
      "A4ZSDL_CP06DEL_ERDAT_MA": "20221014",
      "A4ZSDL_CP06FKDAT_MAX": "20221018",
      "A4ZSDL_CP06EXTI2": "W2240T100",
      "A4ZSDL_CP06TNDR_TRKID": "",
      "A4ZSDL_CP06ZMANUF_PLANT_T": null,
      "A4ZSDL_CP06MARKED_FOR": "",
      "ZMKTSEG_T": "",
      "ZMATENTRD": "38APS04065-12020",
      "ZMTAV_DTE": "20221014",
      "A4ZSDL_CP06ZMAT_DESC": "COMMERCIAL SPLITS",
      "ZMATERIAL_T": "COMMERCIAL SPLITS",
      "ZTRATY": "",
      "A4ZSDL_CP06MULTI_FACT_N": "10/17 RTG CONF NICK 251-281-7741 (TW)",
      "A4ZSDL_CP064ZSDL_O08_NA": "",
      "ZAUTLF": "",
      "A4ZSDL_CP06TXT_OT_IND_I": "On Time",
      "A4ZSDL_CP06EMAIL_ADD": "cindytaylor@mingledorffs.com",
      "OpenQuantityTolgate": 0,
      "ZCALDAY": "20221012",
      "A0PMNTTRMS": "DOM1",
      "A0PMNTTRMS_T": "1.65% CAR & BRY SCH A",
      "A4ZSDL_CP06POLINE_ITM": "000010",
      "A4ZSDL_CP06PRSDT": "20221012",
      "ZPHL3_GRP_T": "LARGE SPLITS",
      "receivedQty": 1,
      "A0REFER_ITM": "",
      "A0REF_DOC_NR": "0045837867",
      "A4ZSDL_CP06PERNR_Y1": "",
      "ZSHP_COND_T": "Standard",
      "ZSHIP_TO_T": "ONE TIME SHIP TO - DOMESTIC  (non-t",
      "A0ADDR_SH_S_T": "MONROEVILLE-AL",
      "A0ADDR_SH_S": "MONROEVILLE-AL",
      "A0SHIPPTYP": "Standard Freight",
      "A4ZSDL_CP064ZSDL_O08_0": "Conrad Watson AC",
      "ZSDBW_T": "",
      "A4ZSDL_CP06SPLIT_LINES": "N",
      "A4ZSDL_CP06STREET_VI": "4100 COUNTY ROAD 5",
      "ZCPSDATE": "20221014",
      "ZMATERIAL__ZMATL_GRP_T": "ELLIJAY WSHP",
      "ZMATERIAL__ZMATL_GRP": "1254",
      "A4ZSDL_CP06POST_CODE_VI": "36460",
      "A4ZSDL_CP06WADAT_IST_MA": "20221018",
      "A4ZSDL_CP06CPSD_ITM_CAL_X": "OCT 2022",
      "A4ZSDL_CP06CPSD_ITM_CAL": "202210",
      "A4ZSDL_CP06CRSD_CALMONT": "202210",
      "A4ZSDL_CP06CRSD_CALMONT_T": "10/2022",
      "A4ZSDL_CP06CRSD_MONTH_T": "OCT",
      "A4ZSDL_CP06CRSD_YEAR": "2022",
      "ZTGLE_IND": "C",
      "A4ZSDL_CP06CONT_DI": null,
      "A0DOC_TYPE": "ZOR",
      "Customer_Model": "",
      "A4ZSDL_CP06LATST_ALLOCN": "No"
    },
    {
      "A0MATL_TYPE": "",
      "A0SHIPPTYP_T": "Standard Freight",
      "A0PLD_GI_DTE": "20221014",
      "A006NZKS3HHO27WANNHAS4HSW9": 0,
      "A00O2TFBIHKAM1JLVDPI0UV2Z3": 21607.8,
      "A006NZKS3HHO27WANNHAS4GXAH": 0,
      "A006NZKS3HHO27WANNHAS4G809": 21607.8,
      "A006NZKS3HHO27WANNHAS4H9XL": 21607.8,
      "A006NZKS3HHO27WANNHAS4H3M1": 21607.8,
      "A006NZKS3HHO27WANNHAS47SLL": 1,
      "A006NZKS3HHO27WANNHAS48O7D": 1,
      "A05QKSHWV712FNJ30UFHGYYIDV": 0,
      "A006NZKS3HHO27WANNHAS490UH": 1,
      "A006NZKS3HHO27WANNHAS49761": 0,
      "A006NZKS3HHO27WANNHAS49WG9": 1,
      "A006NZKS3HHO27WANNHAS4A2RT": 0,
      "A006NZKS3HHO27WANNHAS4A93D": 1,
      "A006NZKS3HHO27WANNHAS4AFEX": 0,
      "A006NZKS3HHO27WANNHAS4AS21": 1,
      "A006NZKS3HHO27WANNHAS4BB0P": 0,
      "A006NZKS3HHO27WANNHAS4AYDL": 0,
      "A006NZKS3HHO27WANNHAS4B4P5": 1,
      "A006NZKS3HHO27WANNHAS4CPL5": 0,
      "A006NZKS3HHO27WANNHAS48HVT": 0,
      "A006NZKS3HHO27WANNHAS4HMKP": 1,
      "A00O2TFBIHKANNR5PA836B51DK": 0,
      "A0TEL_NUMBER": "4044466311",
      "ZCITY": "NORCROSS",
      "A0REGION_T": "GA",
      "ZSHIP_TO": "999999",
      "ZPERSON_T": "Nikki Bailey",
      "ZUSR_LNG": "",
      "A4ZSDL_CP06ZWONUM": null,
      "ZRSM_T": null,
      "ZCUSTOMER": "20080",
      "ZCUSTOMER_T": "MINGLEDORFFS INC",
      "ZCUSTOMER1": "MINGLEDORFFS INC",
      "A4ZSDL_CP06ZBSTNK": "1583817",
      "A0DOC_NUMBER": "4060385",
      "A0SORD_ITEM": 20,
      "A4ZSDL_CP06ADD_DESC": "",
      "A4ZSDL_CP06ALLOCN_INDIC": "No",
      "A4ZSDL_CP06BOL_INSTRUCT": "CALL NICK TATUM AT 251.282.7741 48 HRS PRIOR TO DELIVERY",
      "ZFI_BRAND_T": "CAR",
      "A4ZSDL_CP06SALES_ORD_IT": "556621710",
      "A4ZSDL_CP06ZZIHREZ": "",
      "A0COUNTRY": "US",
      "A4ZSDL_CP06CPSD_CHANGE": "N",
      "ZCRSDTE": "20221013",
      "A4ZSDL_CP06CRSD_HDR_VDU": "20221013",
      "ZPERSON": "Nikki Bailey",
      "ZPLANT_T": "Charlotte Plant",
      "ZDELVGRP_T": "000",
      "A0DLV_PRIO_T": "00",
      "A0DIVISION": "20",
      "A4ZSDL_CP06ZF_PART": "msanders@mingledorffs.com",
      "A4ZSDL_CP06ZU_PART": "jhartner@mingledorffs.com",
      "A4ZSDL_CP06FRWAGENT_T": "Network Transport",
      "ZDELBLK_T": "Not Assigned",
      "A0DEL_BLOCK_T": "Not Assigned",
      "A0INCOTERMS": "PPD",
      "A0DLV_BLOCK": "",
      "ZEXT_ITM_T": "Invoiced",
      "ZTOLL_ITM_T": "Invoiced",
      "ZKTEXT1": "",
      "A4ZSDL_CP06EXTI1_MAX": "CLT1502570",
      "ZEDATUMAX": "20221018",
      "A0DELIV_NUMB": "0077702502",
      "A4ZSDL_CP06DEL_ERDAT_MA": "20221014",
      "A4ZSDL_CP06FKDAT_MAX": "20221018",
      "A4ZSDL_CP06EXTI2": "W2240T100",
      "A4ZSDL_CP06TNDR_TRKID": "",
      "A4ZSDL_CP06ZMANUF_PLANT_T": null,
      "A4ZSDL_CP06MARKED_FOR": "",
      "ZMKTSEG_T": "",
      "ZMATENTRD": "38APS04065-12020",
      "ZMTAV_DTE": "20221014",
      "A4ZSDL_CP06ZMAT_DESC": "COMMERCIAL SPLITS",
      "ZMATERIAL_T": "COMMERCIAL SPLITS",
      "ZTRATY": "",
      "A4ZSDL_CP06MULTI_FACT_N": "10/17 RTG CONF NICK 251-281-7741 (TW)",
      "A4ZSDL_CP064ZSDL_O08_NA": "",
      "ZAUTLF": "",
      "A4ZSDL_CP06TXT_OT_IND_I": "On Time",
      "A4ZSDL_CP06EMAIL_ADD": "cindytaylor@mingledorffs.com",
      "OpenQuantityTolgate": 0,
      "ZCALDAY": "20221012",
      "A0PMNTTRMS": "DOM1",
      "A0PMNTTRMS_T": "1.65% CAR & BRY SCH A",
      "A4ZSDL_CP06POLINE_ITM": "000010",
      "A4ZSDL_CP06PRSDT": "20221012",
      "ZPHL3_GRP_T": "LARGE SPLITS",
      "receivedQty": 1,
      "A0REFER_ITM": "",
      "A0REF_DOC_NR": "0045837867",
      "A4ZSDL_CP06PERNR_Y1": "",
      "ZSHP_COND_T": "Standard",
      "ZSHIP_TO_T": "ONE TIME SHIP TO - DOMESTIC  (non-t",
      "A0ADDR_SH_S_T": "MONROEVILLE-AL",
      "A0ADDR_SH_S": "MONROEVILLE-AL",
      "A0SHIPPTYP": "Standard Freight",
      "A4ZSDL_CP064ZSDL_O08_0": "Conrad Watson AC",
      "ZSDBW_T": "",
      "A4ZSDL_CP06SPLIT_LINES": "N",
      "A4ZSDL_CP06STREET_VI": "4100 COUNTY ROAD 5",
      "ZCPSDATE": "20221014",
      "ZMATERIAL__ZMATL_GRP_T": "ELLIJAY WSHP",
      "ZMATERIAL__ZMATL_GRP": "1254",
      "A4ZSDL_CP06POST_CODE_VI": "36460",
      "A4ZSDL_CP06WADAT_IST_MA": "20221018",
      "A4ZSDL_CP06CPSD_ITM_CAL_X": "OCT 2022",
      "A4ZSDL_CP06CPSD_ITM_CAL": "202210",
      "A4ZSDL_CP06CRSD_CALMONT": "202210",
      "A4ZSDL_CP06CRSD_CALMONT_T": "10/2022",
      "A4ZSDL_CP06CRSD_MONTH_T": "OCT",
      "A4ZSDL_CP06CRSD_YEAR": "2022",
      "ZTGLE_IND": "C",
      "A4ZSDL_CP06CONT_DI": null,
      "A0DOC_TYPE": "ZOR",
      "Customer_Model": "",
      "A4ZSDL_CP06LATST_ALLOCN": "No"
    }
  ],
  "ATPView": [
    {
      "ZMATERIAL": "04-811-50046",
      "ZPLANT_T": "OP Vendor (Generic)",
      "ZATP_DT1": "09/12/2024",
      "ZATP_DT2": "09/12/2024",
      "A00O2TFBIHKALXHWMV8JFH2QYK": 3,
      "A00O2TFBIHKALXHWMV8JFH2XA4": 5,
      "A00O2TFBIHKALXHWMV8JFH33LO": 1,
      "A00O2TFBIHKALXHWMV8JFH162K": 0,
      "A00O2TFBIHKALXHWMV8JFH1IPO": 0,
      "A00O2TFBIHKALXHWMV8JFH1P18": 0,
      "A00O2TFBIHKALXHWMV8JFH45J0": 0,
      "A00O2TFBIHKALXHWMV8JFH39X8": 6,
      "A00O2TFBIHKALXHWMV8JFH3G8S": 3,
      "A00O2TFBIHKALXHWMV8JFH3MKC": null,
      "A00O2TFBIHKALXHWMV8JFH3SVW": null
    },
    {
      "ZMATERIAL": "04-811-50046",
      "ZPLANT_T": "OP Vendor (Generic)",
      "ZATP_DT1": "08/08/2024",
      "ZATP_DT2": "08/08/2024",
      "A00O2TFBIHKALXHWMV8JFH2QYK": 2,
      "A00O2TFBIHKALXHWMV8JFH2XA4": 1,
      "A00O2TFBIHKALXHWMV8JFH33LO": 5,
      "A00O2TFBIHKALXHWMV8JFH162K": 0,
      "A00O2TFBIHKALXHWMV8JFH1IPO": 0,
      "A00O2TFBIHKALXHWMV8JFH1P18": 0,
      "A00O2TFBIHKALXHWMV8JFH45J0": 0,
      "A00O2TFBIHKALXHWMV8JFH39X8": 5,
      "A00O2TFBIHKALXHWMV8JFH3G8S": 1,
      "A00O2TFBIHKALXHWMV8JFH3MKC": null,
      "A00O2TFBIHKALXHWMV8JFH3SVW": null
    },
    {
      "ZMATERIAL": "08-768-54321",
      "ZPLANT_T": "OP Vendor (Generic)",
      "ZATP_DT1": "09/09/2024",
      "ZATP_DT2": "09/09/2024",
      "A00O2TFBIHKALXHWMV8JFH2QYK": 10,
      "A00O2TFBIHKALXHWMV8JFH2XA4": 11,
      "A00O2TFBIHKALXHWMV8JFH33LO": 1,
      "A00O2TFBIHKALXHWMV8JFH162K": 0,
      "A00O2TFBIHKALXHWMV8JFH1IPO": 0,
      "A00O2TFBIHKALXHWMV8JFH1P18": 0,
      "A00O2TFBIHKALXHWMV8JFH45J0": 0,
      "A00O2TFBIHKALXHWMV8JFH39X8": null,
      "A00O2TFBIHKALXHWMV8JFH3G8S": null,
      "A00O2TFBIHKALXHWMV8JFH3MKC": 8,
      "A00O2TFBIHKALXHWMV8JFH3SVW": 19
    },
    {
      "ZMATERIAL": "04-811-12345",
      "ZPLANT_T": "OP Vendoor",
      "ZATP_DT1": "09/12/2024",
      "ZATP_DT2": "09/12/2024",
      "A00O2TFBIHKALXHWMV8JFH2QYK": 3,
      "A00O2TFBIHKALXHWMV8JFH2XA4": 5,
      "A00O2TFBIHKALXHWMV8JFH33LO": 1,
      "A00O2TFBIHKALXHWMV8JFH162K": 0,
      "A00O2TFBIHKALXHWMV8JFH1IPO": 0,
      "A00O2TFBIHKALXHWMV8JFH1P18": 0,
      "A00O2TFBIHKALXHWMV8JFH45J0": 0,
      "A00O2TFBIHKALXHWMV8JFH39X8": 6,
      "A00O2TFBIHKALXHWMV8JFH3G8S": 3,
      "A00O2TFBIHKALXHWMV8JFH3MKC": null,
      "A00O2TFBIHKALXHWMV8JFH3SVW": null
    },
    {
      "ZMATERIAL": "11-123-09876",
      "ZPLANT_T": "OP Vendor (Generic)",
      "ZATP_DT1": "09/01/2024",
      "ZATP_DT2": "09/01/2024",
      "A00O2TFBIHKALXHWMV8JFH2QYK": 6,
      "A00O2TFBIHKALXHWMV8JFH2XA4": 10,
      "A00O2TFBIHKALXHWMV8JFH33LO": 2,
      "A00O2TFBIHKALXHWMV8JFH162K": 0,
      "A00O2TFBIHKALXHWMV8JFH1IPO": 12,
      "A00O2TFBIHKALXHWMV8JFH1P18": 8,
      "A00O2TFBIHKALXHWMV8JFH45J0": 0,
      "A00O2TFBIHKALXHWMV8JFH39X8": 12,
      "A00O2TFBIHKALXHWMV8JFH3G8S": 3,
      "A00O2TFBIHKALXHWMV8JFH3MKC": 8,
      "A00O2TFBIHKALXHWMV8JFH3SVW": 10
    }
  ]}

// Sample header name and filename
const headerName = 'OpenOrderList';
const filename = 'Open Order List';

export default {
  title: 'Components/ExcelDownloadButton',
  component: ExcelDownloadButton,
  tags: ['autodocs'],
};

const Template = (args) => <ExcelDownloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: sampleData[headerName],
  headerName: headerName,
  filename: filename,
  visibility: 'visible',  
};
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from "react";
import * as XLSX from "xlsx";
import styled from "styled-components";
import { IconButton, CircularProgress } from "@mui/material";
import { RiFileExcel2Line } from "react-icons/ri";
import {
  formatDate,
  formatQuanity,
  formatOrderQuantity,
  toOrderStatus,
  formatPrice,
  toAcknowledged,
  toWholeNumberShipped,
  toDCText,
} from "./shared/formatter";
import { generateHeader } from "./shared/ExcelHeader";
import SkuSearchViewHint from "./shared/SkuSearchViewHint";
import { IoInformationOutline } from "react-icons/io5";
import './F4ValueHelp.css';



const ExcelDownloadButton = ({
  data,
  headerName,
  filename,
  visibility,
  buttons,
}) => {

  
    const [isDownloading, setIsDownloading] = useState(false);
   
  
  const handleDownload = async () => {
    
    //show sku search veiw hint
  
  
    // Map the data to match the headers
    const headers = generateHeader(headerName);
    const dataToExport = data.map((item) => {
      return headers.reduce((obj, header) => {
        if (header.label.includes("Quantity") || header.label.includes("Qty")) {
          obj[header.key] = formatQuanity(item[header.key]);
        } else if (
          header.label.includes("Order Date") ||
          header.label === "Latest CPSD" ||
          header.label === "CRSD Header" ||
          header.label === "CRSD" ||
          header.label === "Latest Delivery Ticket" ||
          header.label.includes("Date")
        ) {
          obj[header.key] = formatDate(item[header.key]);
        } else if (header.label.includes("Value")) {
          obj[header.key] = formatPrice(item[header.key]);
        } else if (header.label === "Ackknowledged") {
          obj.Ackknowledged = toAcknowledged(
            item.A006NZKS3HHO27WANNHAS48HVT,
            item.A006NZKS3HHO27WANNHAS47SLL
          );
        } else if (
          header.label === "Received" ||
          header.label === "Firmed" ||
          header.label === "In Production" ||
          header.label === "In Transit" ||
          header.label === "In Inventory" ||
          header.label === "DC Load Cycle" ||
          header.label === "Ready to Ship"
        ) {
          const keys = header.key.split(",");
          obj[header.label] = toDCText(
            item[keys[0]],
            item[keys[1]],
            item[keys[2]]
          );
        } else if (header.label === "Shipped") {
          obj[header.key] = toWholeNumberShipped(item[header.key]);
        } else {
          obj[header.key] = item[header.key];
        }
        return obj;
      }, {});
    });

    // Create a new workbook and add a new sheet with the data
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataToExport, {
      header: headers.map((header) => header.key),
      skipHeader: false,
    });

    // Set custom headers
    for (let i = 0; i < headers.length; i++) {
      const cellRef = XLSX.utils.encode_cell({ c: i, r: 0 });
      worksheet[cellRef].v = headers[i].label;
    }

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, filename);

    // Write the workbook and trigger the download
    XLSX.writeFile(workbook, "${filename}.xlsx");

    setIsDownloading(false); // Reset the download indicator
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          backgroundColor: "whitesmoke",
          padding: 10,
        }}
      >
        <IconButton
          onClick={handleDownload}
          disabled={isDownloading}
          id={headerName}
          className={visibility}
          style={{ color: "white !important" }}
        >
          {isDownloading ? (
            <CircularProgress size={24} />
          ) : (
            <RiFileExcel2Line style={{ color: "white !important" }} />
          )}
        </IconButton>
      </div>
    </>
  );
};

export default ExcelDownloadButton;
`
      ,
    },
  },
};

