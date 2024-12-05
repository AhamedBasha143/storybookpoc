import React, { useState, useEffect, useContext } from "react";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grow from "@mui/material/Grow";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import './F4ValueHelp.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const F4ValueHelp = ({
  label,
  id,
  data,
  onSelect,
  onChange,
  disabled,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [tempSelectedItems, setTempSelectedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [f4Hidden, setF4Hidden] = useState(false);
  const [filterDataSet, setFilterDataSet] = useState([data]);
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const inputValues = inputValue.split(",").map((val) => val.trim());
    const matchedItems = filterDataSet.filter((item) =>
      inputValues.includes(item.name)
    );
    const uniqueMatchedItems = [...new Set(matchedItems)];
    setTempSelectedItems(uniqueMatchedItems);
    if (
      id === "po" ||
      id === "so" ||
      id === "soi" ||
      id === "soCO" ||
      id === "poCO"
    ) {
      setF4Hidden(true);
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(selectedItems.map((item) => item.label).join(", "));
  }, [selectedItems]);

  const fetchFilterData = async () => {
    setOpen(true);
    setLoadingSpinner(true);
    const itemData = {
      Customer: [
        {
          label: "1000008",
          value: "UNITED REF - 463 SHREVEPORT",
          selected: false,
        },
        {
          label: "20080",
          value: "MINGLEDORFFS INC",
          selected: false,
        },
        {
          label: "1000016",
          value: "CARR SUPPLY",
          selected: false,
        },
        {
          label: "1000053",
          value: "EDDY GROUP LIMITED - DC",
          selected: false,
        },
        {
          label: "1000056",
          value: "MORRISON SUPPLY - UVALDE 1114",
          selected: false,
        },
        {
          label: "1000069",
          value: "TRENT METALS (2012) LIMITED",
          selected: false,
        },
        {
          label: "1000074",
          value: "Chicos FAS Inc",
          selected: false,
        },
        {
          label: "1000084",
          value: "FERGUSON ENTERPRISE RICHLAND WA",
          selected: false,
        },
        {
          label: "1000103",
          value: "FIRST SUPPLY-DELAVAN",
          selected: false,
        },
        {
          label: "1000124",
          value: "Whole Foods Market Inc",
          selected: false,
        },
        {
          label: "1000131",
          value: "MORRISON SUPPLY - FORT WORTH DC 109",
          selected: false,
        },
        {
          label: "1000140",
          value: "Lee Company",
          selected: false,
        },
        {
          label: "1000148",
          value: "WOLSELEY CANADA",
          selected: false,
        },
        {
          label: "1000155",
          value: "SEER2",
          selected: false,
        },
        {
          label: "1000182",
          value: "WILLCO WHOLESALE DISTRIBUTORS",
          selected: false,
        },
        {
          label: "1000192",
          value: "FERGUSON HVAC GILBERT AZ",
          selected: false,
        },
        {
          label: "1000210",
          value: "BAKER DISTRIBUTING #615",
          selected: false,
        },
        {
          label: "1000228",
          value: "JOHNSTONE-COMFORT CONTROL SUPP",
          selected: false,
        },
        {
          label: "1000268",
          value: "NATIONAL EXCELSIOR - LEES SUMMIT",
          selected: false,
        },
        {
          label: "1000432",
          value: "NATIONAL EXCELSIOR - NEW BERLIN",
          selected: false,
        },
        {
          label: "1000441",
          value: "Shoe Palace Corporation",
          selected: false,
        },
        {
          label: "1000453",
          value: "EPTING DISTRIBUTORS INC",
          selected: false,
        },
        {
          label: "1000458",
          value: "UNITED REF -  520 SUMMERVILLE",
          selected: false,
        },
        {
          label: "1000464",
          value: "BAKER DISTRIBUTING #679",
          selected: false,
        },
        {
          label: "1000465",
          value: "BAKER DISTRIBUTING #678",
          selected: false,
        },
        {
          label: "100051",
          value: "CARRIER PUERTO RICO INC",
          selected: false,
        },
        {
          label: "100059",
          value: "THE HARRY COOPER SUPPLY COMPAN",
          selected: false,
        },
        {
          label: "1000702",
          value: "CHADWELL SUPPLY INC",
          selected: false,
        },
        {
          label: "1000714",
          value: "CHADWELL SUPPLY INC",
          selected: false,
        },
        {
          label: "1000716",
          value: "BAKER DISTRIBUTING #366",
          selected: false,
        },
        {
          label: "1000731",
          value: "Church of Scientology International",
          selected: false,
        },
        {
          label: "1000748",
          value: "TRI STATE SUPPLY INC",
          selected: false,
        },
        {
          label: "1000749",
          value: "UNITED REF - 526 GRIFFIN",
          selected: false,
        },
        {
          label: "1000753",
          value: "UNITED REFRIGERATION OF CANADA 556",
          selected: false,
        },
        {
          label: "1000755",
          value: "UNITED REF  - 515 ROME",
          selected: false,
        },
        {
          label: "1000760",
          value: "Shake Shack Enterprises LLC",
          selected: false,
        },
        {
          label: "1000770",
          value: "NNI Construction Co",
          selected: false,
        },
        {
          label: "1000776",
          value: "UNITED REF - 549 JACKSON",
          selected: false,
        },
        {
          label: "100078",
          value: "KOVAL BUILDING AND PLUMBING SU",
          selected: false,
        },
        {
          label: "1000782",
          value: "HEATING & COOLING SUPPLY INC",
          selected: false,
        },
        {
          label: "1000784",
          value: "HEATING & COOLING SUPPLY INC",
          selected: false,
        },
        {
          label: "1000787",
          value: "HEATING & COOLING SUPPLY INC",
          selected: false,
        },
        {
          label: "1000789",
          value: "HEATING & COOLING SUPPLY INC",
          selected: false,
        },
        {
          label: "100081",
          value: "LOUISVILLE WINAIR CO",
          selected: false,
        },
        {
          label: "1000820",
          value: "UNITED REFR 508 JACKSONVILLE",
          selected: false,
        },
        {
          label: "1000824",
          value: "UNITED REFR 506 VALDOSTA",
          selected: false,
        },
        {
          label: "1000825",
          value: "UNITED REFR 510 WAYCROSS",
          selected: false,
        },
        {
          label: "1000839",
          value: "UNITED REFR 525 COLLEGE PARK",
          selected: false,
        },
        {
          label: "1000846",
          value: "UNITED REFR 553 RICHMOND",
          selected: false,
        },
        {
          label: "1000856",
          value: "UNITED REFR 476 LUMBERTON",
          selected: false,
        },
        {
          label: "1000867",
          value: "UNITED REFR 494 CONCORD",
          selected: false,
        },
        {
          label: "1000874",
          value: "UNITED REFR 486 COLUMBIA",
          selected: false,
        },
        {
          label: "1000875",
          value: "UNITED REFR 487 GREENVILLE",
          selected: false,
        },
        {
          label: "1000877",
          value: "UNITED REFR 490 SPARTANBURG",
          selected: false,
        },
        {
          label: "1000879",
          value: "UNITED REFR 492 SUMTER",
          selected: false,
        },
        {
          label: "1000880",
          value: "UNITED REFR 493 ANDERSON",
          selected: false,
        },
        {
          label: "1000883",
          value: "UNITED REFR 501 GREENWOOD",
          selected: false,
        },
        {
          label: "1000885",
          value: "UNITED REFR 503 GAFFNEY",
          selected: false,
        },
        {
          label: "1000886",
          value: "UNITED REFR 900 & 491 ROCK HILL",
          selected: false,
        },
        {
          label: "1000890",
          value: "UNITED REFR 536 TULLAHOMA",
          selected: false,
        },
        {
          label: "1000893",
          value: "UNITED REFR 539 KINGSPORT",
          selected: false,
        },
        {
          label: "100090",
          value: "PRESCOTT WINSUPPLY CO",
          selected: false,
        },
        {
          label: "1000906",
          value: "UNITED REFR 544 MORRISTOWN",
          selected: false,
        },
        {
          label: "1000915",
          value: "Apple",
          selected: false,
        },
        {
          label: "100093",
          value: "SALINA SUPPLY CO",
          selected: false,
        },
        {
          label: "1000942",
          value: "HD SUPPLY INC",
          selected: false,
        },
        {
          label: "1000968",
          value: "BAKER DISTRIBUTING #676",
          selected: false,
        },
        {
          label: "1000969",
          value: "HD Supply - TX03",
          selected: false,
        },
        {
          label: "1000970",
          value: "HD Supply - CO11",
          selected: false,
        },
        {
          label: "1000976",
          value: "HD Supply - TX35",
          selected: false,
        },
        {
          label: "1000977",
          value: "HD Supply - IL30",
          selected: false,
        },
        {
          label: "100098",
          value: "THOMAS SUPPLY INC",
          selected: false,
        },
        {
          label: "1000981",
          value: "HD Supply - TX18",
          selected: false,
        },
        {
          label: "1000982",
          value: "HD Supply - MO42",
          selected: false,
        },
        {
          label: "1000984",
          value: "HD Supply - OK28",
          selected: false,
        },
        {
          label: "1000985",
          value: "HD Supply - TX27",
          selected: false,
        },
        {
          label: "1000986",
          value: "HD Supply - MO15",
          selected: false,
        },
        {
          label: "1000987",
          value: "HD Supply - MD23",
          selected: false,
        },
        {
          label: "1000988",
          value: "HD Supply  - MA21",
          selected: false,
        },
        {
          label: "1000990",
          value: "HD Supply- OH36",
          selected: false,
        },
        {
          label: "1000992",
          value: "HD Supply - IN41",
          selected: false,
        },
        {
          label: "1000993",
          value: "HD Supply - VA37",
          selected: false,
        },
        {
          label: "1000995",
          value: "HD Supply - NJ22",
          selected: false,
        },
        {
          label: "1000996",
          value: "HD Supply - VA10",
          selected: false,
        },
        {
          label: "1000999",
          value: "HD Supply - CA05",
          selected: false,
        },
        {
          label: "10010",
          value: "DIST. CORP. OF NEW ENGLAND",
          selected: false,
        },
        {
          label: "1001002",
          value: "HD Supply - GA02",
          selected: false,
        },
        {
          label: "1001003",
          value: "HD Supply - AL04",
          selected: false,
        },
        {
          label: "1001004",
          value: "HD Supply - NC34",
          selected: false,
        },
        {
          label: "1001006",
          value: "HD Supply - FL14",
          selected: false,
        },
        {
          label: "1001008",
          value: "HD Supply - FL19",
          selected: false,
        },
        {
          label: "1001009",
          value: "HD Supply - TN44",
          selected: false,
        },
        {
          label: "1001011",
          value: "HD Supply - FL45",
          selected: false,
        },
        {
          label: "1001012",
          value: "HD Supply - NC38",
          selected: false,
        },
        {
          label: "1001013",
          value: "HD Supply - FL16",
          selected: false,
        },
        {
          label: "1001014",
          value: "HD Supply - NV39",
          selected: false,
        },
        {
          label: "1001015",
          value: "HD Supply - CA20",
          selected: false,
        },
        {
          label: "1001016",
          value: "HD Supply - AZ17",
          selected: false,
        },
        {
          label: "1001017",
          value: "HD Supply - CA01",
          selected: false,
        },
        {
          label: "1001051",
          value: "HD SUPPLY - NEW ORLEANS DC - LA46",
          selected: false,
        },
        {
          label: "1001056",
          value: "BAKER DISTRIBUTING #696",
          selected: false,
        },
      ],
      Customer_Type_C: [
        {
          label: "",
          value: "None",
          selected: false,
        },
        {
          label: "4000000407",
          value: "AIREFCO",
          selected: false,
        },
        {
          label: "4000000409",
          value: "AUER STEEL",
          selected: false,
        },
        {
          label: "4000000410",
          value: "BEHLER-YOUNG",
          selected: false,
        },
        {
          label: "4000000411",
          value: "CARRIER GREAT LAKES",
          selected: false,
        },
        {
          label: "4000000412",
          value: "CE COMFORT PRODUCTS",
          selected: false,
        },
        {
          label: "4000000413",
          value: "CONTRACTORS OREM",
          selected: false,
        },
        {
          label: "4000000417",
          value: "DCNE",
          selected: false,
        },
        {
          label: "4000000420",
          value: "FERGUSONS",
          selected: false,
        },
        {
          label: "4000000421",
          value: "HABEGGER",
          selected: false,
        },
        {
          label: "4000000422",
          value: "HAWAII",
          selected: false,
        },
        {
          label: "4000000423",
          value: "KOCH AIR LLC",
          selected: false,
        },
        {
          label: "4000000424",
          value: "LOHMILLER",
          selected: false,
        },
        {
          label: "4000000425",
          value: "MINGLEDORFF",
          selected: false,
        },
        {
          label: "4000000426",
          value: "MINNESOTA AIR",
          selected: false,
        },
        {
          label: "4000000427",
          value: "PEIRCE PHELPS",
          selected: false,
        },
        {
          label: "4000000428",
          value: "RJ MURRAY",
          selected: false,
        },
        {
          label: "4000000429",
          value: "REFRIGERATION SALES",
          selected: false,
        },
        {
          label: "4000000430",
          value: "ROBERT MADDEN",
          selected: false,
        },
        {
          label: "4000000431",
          value: "SHORE DISTRIBUTING",
          selected: false,
        },
        {
          label: "4000000432",
          value: "SIGLER CALIFORNIA",
          selected: false,
        },
        {
          label: "4000000433",
          value: "STANDARD AIR & LITE",
          selected: false,
        },
        {
          label: "4000000434",
          value: "TEMPERATURE SYSTEMS",
          selected: false,
        },
        {
          label: "4000000435",
          value: "TEMPERATURE EQUIPMENT",
          selected: false,
        },
        {
          label: "4000000437",
          value: "WEATHERTECH",
          selected: false,
        },
        {
          label: "4000000440",
          value: "CARRIER ENTERPRISE CANADA LP",
          selected: false,
        },
        {
          label: "4000000450",
          value: "CE NORTHEAST LLC",
          selected: false,
        },
        {
          label: "4000000455",
          value: "CE SOUTH TEXAS",
          selected: false,
        },
        {
          label: "4000000456",
          value: "SLAKEY",
          selected: false,
        },
        {
          label: "4000000460",
          value: "MARSHALL NW PIPE FITTINGS",
          selected: false,
        },
        {
          label: "4000000465",
          value: "CE FLORlabelA",
          selected: false,
        },
        {
          label: "4000000466",
          value: "CE Mlabel ATLANTIC",
          selected: false,
        },
        {
          label: "4000000467",
          value: "CE SOUTHEAST",
          selected: false,
        },
        {
          label: "4000000470",
          value: "MISC",
          selected: false,
        },
        {
          label: "4000000473",
          value: "SIGLER AZ-label",
          selected: false,
        },
        {
          label: "4000000474",
          value: "CE EXPORT",
          selected: false,
        },
        {
          label: "4000000475",
          value: "WINWHOLESALE INC",
          selected: false,
        },
        {
          label: "4000000476",
          value: "UNITED REFRIGERATION INC",
          selected: false,
        },
        {
          label: "4000000477",
          value: "HAJOCA CORPORATION",
          selected: false,
        },
        {
          label: "4000000478",
          value: "WATSCO INC",
          selected: false,
        },
        {
          label: "4000000479",
          value: "MORRISON",
          selected: false,
        },
        {
          label: "4000000480",
          value: "EXPORT",
          selected: false,
        },
        {
          label: "4000000481",
          value: "NEW CUSTOMER",
          selected: false,
        },
        {
          label: "4000000482",
          value: "HOMANS ASSOCIATES",
          selected: false,
        },
        {
          label: "4000000485",
          value: "JOHNSTONE SUPPLY",
          selected: false,
        },
        {
          label: "4000000486",
          value: "FENCO SUPPLY - JOHNSON CITY",
          selected: false,
        },
        {
          label: "4000000490",
          value: "CE Mlabel-SOUTH",
          selected: false,
        },
        {
          label: "4000000491",
          value: "CE SOUTH CENTRAL",
          selected: false,
        },
        {
          label: "4000000492",
          value: "HD SUPPLY INC",
          selected: false,
        },
        {
          label: "4000000495",
          value: "MH Distributors",
          selected: false,
        },
        {
          label: "4000000496",
          value: "CLAYTON",
          selected: false,
        },
        {
          label: "4000000501",
          value: "APR SUPPLY",
          selected: false,
        },
        {
          label: "4000000504",
          value: "BLEVINS",
          selected: false,
        },
        {
          label: "4000000505",
          value: "BRAUER SUPPLY",
          selected: false,
        },
        {
          label: "4000000506",
          value: "CARR SUPPLY",
          selected: false,
        },
        {
          label: "4000000508",
          value: "CHARLESTON INC",
          selected: false,
        },
        {
          label: "4000000509",
          value: "CONNOR CO",
          selected: false,
        },
        {
          label: "4000000510",
          value: "CORKEN STEEL PRODUCTS",
          selected: false,
        },
        {
          label: "4000000513",
          value: "ED'S SUPPLY",
          selected: false,
        },
        {
          label: "4000000514",
          value: "EPTING DISTRIBUTORS",
          selected: false,
        },
        {
          label: "4000000515",
          value: "FIRST SUPPLY",
          selected: false,
        },
        {
          label: "4000000516",
          value: "GATEWAY SUPPLY",
          selected: false,
        },
        {
          label: "4000000519",
          value: "IRR SUPPLY CENTERS",
          selected: false,
        },
        {
          label: "4000000520",
          value: "LEE SUPPLY",
          selected: false,
        },
        {
          label: "4000000522",
          value: "R E MICHEL",
          selected: false,
        },
        {
          label: "4000000523",
          value: "SANDERS SUPPLY",
          selected: false,
        },
        {
          label: "4000000525",
          value: "Slabel HARVEY INDUSTRIES",
          selected: false,
        },
        {
          label: "4000000526",
          value: "SINCLAIR SUPPLY",
          selected: false,
        },
        {
          label: "4000000527",
          value: "SOUTH CENTRAL CORPORATION",
          selected: false,
        },
        {
          label: "4000000528",
          value: "SOUTHERN REFRIGERATION",
          selected: false,
        },
        {
          label: "4000000529",
          value: "TRENT METALS LIMITED",
          selected: false,
        },
        {
          label: "4000000530",
          value: "TTI CLIMATISATION",
          selected: false,
        },
        {
          label: "4000000531",
          value: "WHOLESALE  HTG SUPPLY",
          selected: false,
        },
        {
          label: "4000000532",
          value: "WOLSELEY-CANADA",
          selected: false,
        },
        {
          label: "4000000533",
          value: "MAINTENANCE SUPPLY",
          selected: false,
        },
        {
          label: "4000000535",
          value: "CRNA",
          selected: false,
        },
        {
          label: "4000000542",
          value: "Johnstone - Atwater Supply",
          selected: false,
        },
        {
          label: "4000000543",
          value: "C&H Europe",
          selected: false,
        },
        {
          label: "4000000545",
          value: "valueair",
          selected: false,
        },
        {
          label: "4000000546",
          value: "Ductless Supply LLC",
          selected: false,
        },
        {
          label: "4000000549",
          value: "Enertrak",
          selected: false,
        },
        {
          label: "4000000552",
          value: "GT World",
          selected: false,
        },
        {
          label: "4000000553",
          value: "ICON",
          selected: false,
        },
        {
          label: "4000000556",
          value: "Mars Heat Controllers",
          selected: false,
        },
        {
          label: "4000000558",
          value: "Mini Splitwarehouse",
          selected: false,
        },
        {
          label: "4000000559",
          value: "Powrmatic",
          selected: false,
        },
        {
          label: "4000000562",
          value: "Rockwell Industries",
          selected: false,
        },
        {
          label: "4000000569",
          value: "Ontario Heating",
          selected: false,
        },
        {
          label: "4000000575",
          value: "CE Mlabel ATLANTIC",
          selected: false,
        },
      ],
      CSR: [
        {
          label: "Alvaro Gonzalez",
          value: "Alvaro Gonzalez",
          selected: false,
        },
        {
          label: "Alyssa McGrath",
          value: "Alyssa McGrath",
          selected: false,
        },
        {
          label: "Amanda Case",
          value: "Amanda Case",
          selected: false,
        },
        {
          label: "Amanda Sanders",
          value: "Amanda Sanders",
          selected: false,
        },
        {
          label: "Amber Douglas",
          value: "Amber Douglas",
          selected: false,
        },
        {
          label: "Amy Burtless",
          value: "Amy Burtless",
          selected: false,
        },
        {
          label: "Amy Ranger",
          value: "Amy Ranger",
          selected: false,
        },
        {
          label: "Andrea Gangemi",
          value: "Andrea Gangemi",
          selected: false,
        },
        {
          label: "Andrew Davis",
          value: "Andrew Davis",
          selected: false,
        },
        {
          label: "Angie Bamba",
          value: "Angie Bamba",
          selected: false,
        },
        {
          label: "Candy Klink",
          value: "Candy Klink",
          selected: false,
        },
        {
          label: "Carrie Starkey",
          value: "Carrie Starkey",
          selected: false,
        },
        {
          label: "Christy Howard",
          value: "Christy Howard",
          selected: false,
        },
        {
          label: "Colleen Warf",
          value: "Colleen Warf",
          selected: false,
        },
        {
          label: "Collin Strong",
          value: "Collin Strong",
          selected: false,
        },
        {
          label: "Cristina Wallon",
          value: "Cristina Wallon",
          selected: false,
        },
        {
          label: "Darla Slade",
          value: "Darla Slade",
          selected: false,
        },
        {
          label: "Debbie Jobin",
          value: "Debbie Jobin",
          selected: false,
        },
        {
          label: "Deborah Roy-Jones",
          value: "Deborah Roy-Jones",
          selected: false,
        },
        {
          label: "Dorinne Buswell",
          value: "Dorinne Buswell",
          selected: false,
        },
        {
          label: "Ellen Allen",
          value: "Ellen Allen",
          selected: false,
        },
        {
          label: "Eric Leszczynski",
          value: "Eric Leszczynski",
          selected: false,
        },
        {
          label: "Heather Brant",
          value: "Heather Brant",
          selected: false,
        },
        {
          label: "Heather Muncy",
          value: "Heather Muncy",
          selected: false,
        },
        {
          label: "Jessica Bright",
          value: "Jessica Bright",
          selected: false,
        },
        {
          label: "Joanne Hertel",
          value: "Joanne Hertel",
          selected: false,
        },
        {
          label: "Joanne Sherwood",
          value: "Joanne Sherwood",
          selected: false,
        },
        {
          label: "KASEY STOCSTILL",
          value: "KASEY STOCSTILL",
          selected: false,
        },
        {
          label: "KENDRA HOBBY",
          value: "KENDRA HOBBY",
          selected: false,
        },
        {
          label: "KIMBERLY HILL",
          value: "KIMBERLY HILL",
          selected: false,
        },
        {
          label: "Kathleen Grecco",
          value: "Kathleen Grecco",
          selected: false,
        },
        {
          label: "Kim Cashion",
          value: "Kim Cashion",
          selected: false,
        },
        {
          label: "Kirsten Linfoot",
          value: "Kirsten Linfoot",
          selected: false,
        },
        {
          label: "Kristen Hollingsworth",
          value: "Kristen Hollingsworth",
          selected: false,
        },
        {
          label: "Laura Stiles",
          value: "Laura Stiles",
          selected: false,
        },
        {
          label: "Lauryn Corigliano",
          value: "Lauryn Corigliano",
          selected: false,
        },
        {
          label: "Leslie Franklin",
          value: "Leslie Franklin",
          selected: false,
        },
        {
          label: "Lindsey Haley",
          value: "Lindsey Haley",
          selected: false,
        },
        {
          label: "Lisa Gray",
          value: "Lisa Gray",
          selected: false,
        },
        {
          label: "Maritza Jackson",
          value: "Maritza Jackson",
          selected: false,
        },
        {
          label: "Mary Beth Kozlowski",
          value: "Mary Beth Kozlowski",
          selected: false,
        },
        {
          label: "Maryann Costello",
          value: "Maryann Costello",
          selected: false,
        },
        {
          label: "Maryann Wilson",
          value: "Maryann Wilson",
          selected: false,
        },
        {
          label: "Matt Hesson",
          value: "Matt Hesson",
          selected: false,
        },
        {
          label: "Mike Thomas",
          value: "Mike Thomas",
          selected: false,
        },
        {
          label: "Nicole Testa",
          value: "Nicole Testa",
          selected: false,
        },
        {
          label: "Nikki Bailey",
          value: "Nikki Bailey",
          selected: false,
        },
        {
          label: "Octavius Relabel",
          value: "Octavius Relabel",
          selected: false,
        },
        {
          label: "PAUL HIRT",
          value: "PAUL HIRT",
          selected: false,
        },
        {
          label: "Paige Quick",
          value: "Paige Quick",
          selected: false,
        },
        {
          label: "Patricia Arre",
          value: "Patricia Arre",
          selected: false,
        },
        {
          label: "Patricia Dahlin",
          value: "Patricia Dahlin",
          selected: false,
        },
        {
          label: "Philip Hausele",
          value: "Philip Hausele",
          selected: false,
        },
        {
          label: "Rachael Dydyk",
          value: "Rachael Dydyk",
          selected: false,
        },
        {
          label: "Rebecca Pollack",
          value: "Rebecca Pollack",
          selected: false,
        },
        {
          label: "Samuel Keene",
          value: "Samuel Keene",
          selected: false,
        },
        {
          label: "Sandy Green",
          value: "Sandy Green",
          selected: false,
        },
        {
          label: "Shirley Woodard",
          value: "Shirley Woodard",
          selected: false,
        },
        {
          label: "Stephanie Woods",
          value: "Stephanie Woods",
          selected: false,
        },
        {
          label: "Stephen Reusser",
          value: "Stephen Reusser",
          selected: false,
        },
        {
          label: "Susan Roan",
          value: "Susan Roan",
          selected: false,
        },
        {
          label: "Terri Burns",
          value: "Terri Burns",
          selected: false,
        },
        {
          label: "Tony Anderalli",
          value: "Tony Anderalli",
          selected: false,
        },
        {
          label: "Woosuk Chong",
          value: "Woosuk Chong",
          selected: false,
        },
        {
          label: "Zuleika Morales",
          value: "Zuleika Morales",
          selected: false,
        },
      ],
      RSM: [
        {
          label: "ADAM JONES",
          value: "ADAM JONES",
          selected: false,
        },
        {
          label: "Aaron Rud",
          value: "Aaron Rud",
          selected: false,
        },
        {
          label: "Allison Henk",
          value: "Allison Henk",
          selected: false,
        },
        {
          label: "Andy Ranjan",
          value: "Andy Ranjan",
          selected: false,
        },
        {
          label: "Bill Hirsh",
          value: "Bill Hirsh",
          selected: false,
        },
        {
          label: "Blane Caskey",
          value: "Blane Caskey",
          selected: false,
        },
        {
          label: "Brooke MacLaren",
          value: "Brooke MacLaren",
          selected: false,
        },
        {
          label: "Bruce Hazen",
          value: "Bruce Hazen",
          selected: false,
        },
        {
          label: "Daniel Gavaghan",
          value: "Daniel Gavaghan",
          selected: false,
        },
        {
          label: "Darcy Schumann",
          value: "Darcy Schumann",
          selected: false,
        },
        {
          label: "Darren Mechler",
          value: "Darren Mechler",
          selected: false,
        },
        {
          label: "Dave Conners",
          value: "Dave Conners",
          selected: false,
        },
        {
          label: "Diego Salazar",
          value: "Diego Salazar",
          selected: false,
        },
        {
          label: "Don Buckmaster",
          value: "Don Buckmaster",
          selected: false,
        },
        {
          label: "Fabio Rinaldi",
          value: "Fabio Rinaldi",
          selected: false,
        },
        {
          label: "Harold Owens",
          value: "Harold Owens",
          selected: false,
        },
        {
          label: "IAN TORRES",
          value: "IAN TORRES",
          selected: false,
        },
        {
          label: "Jacob Woods",
          value: "Jacob Woods",
          selected: false,
        },
        {
          label: "James Honyotski",
          value: "James Honyotski",
          selected: false,
        },
        {
          label: "Jason Shaw",
          value: "Jason Shaw",
          selected: false,
        },
        {
          label: "Jason Wehde",
          value: "Jason Wehde",
          selected: false,
        },
        {
          label: "Jason Willis",
          value: "Jason Willis",
          selected: false,
        },
        {
          label: "Jennifer Marker",
          value: "Jennifer Marker",
          selected: false,
        },
        {
          label: "Jennifer Weimer",
          value: "Jennifer Weimer",
          selected: false,
        },
        {
          label: "Jesse McCamish",
          value: "Jesse McCamish",
          selected: false,
        },
        {
          label: "Jessica Meir",
          value: "Jessica Meir",
          selected: false,
        },
        {
          label: "Joe Molinaro",
          value: "Joe Molinaro",
          selected: false,
        },
        {
          label: "John Makfinsky",
          value: "John Makfinsky",
          selected: false,
        },
        {
          label: "Jose Lague",
          value: "Jose Lague",
          selected: false,
        },
        {
          label: "Justin Richey",
          value: "Justin Richey",
          selected: false,
        },
        {
          label: "Kam Gupta",
          value: "Kam Gupta",
          selected: false,
        },
        {
          label: "Keith Ledford",
          value: "Keith Ledford",
          selected: false,
        },
        {
          label: "Kelsey Pearlman",
          value: "Kelsey Pearlman",
          selected: false,
        },
        {
          label: "Kirsten Pasko",
          value: "Kirsten Pasko",
          selected: false,
        },
        {
          label: "Len Carfa",
          value: "Len Carfa",
          selected: false,
        },
        {
          label: "MATTHEW MCKINNEY",
          value: "MATTHEW MCKINNEY",
          selected: false,
        },
        {
          label: "Margo Richter",
          value: "Margo Richter",
          selected: false,
        },
        {
          label: "Matt Lindstrum",
          value: "Matt Lindstrum",
          selected: false,
        },
        {
          label: "Matthew Velasquez",
          value: "Matthew Velasquez",
          selected: false,
        },
        {
          label: "Maura Kenny",
          value: "Maura Kenny",
          selected: false,
        },
        {
          label: "Michael Jacobsen",
          value: "Michael Jacobsen",
          selected: false,
        },
        {
          label: "Micheal Brown",
          value: "Micheal Brown",
          selected: false,
        },
        {
          label: "Mike Barnes",
          value: "Mike Barnes",
          selected: false,
        },
        {
          label: "Mike Denison",
          value: "Mike Denison",
          selected: false,
        },
        {
          label: "Mohammad Lami",
          value: "Mohammad Lami",
          selected: false,
        },
        {
          label: "NTL SALES NTL SALES",
          value: "NTL SALES NTL SALES",
          selected: false,
        },
        {
          label: "Rob Ochs",
          value: "Rob Ochs",
          selected: false,
        },
        {
          label: "Robert Chatman",
          value: "Robert Chatman",
          selected: false,
        },
        {
          label: "Robert Poole",
          value: "Robert Poole",
          selected: false,
        },
        {
          label: "Ryan Hall",
          value: "Ryan Hall",
          selected: false,
        },
        {
          label: "SAM CARROW",
          value: "SAM CARROW",
          selected: false,
        },
        {
          label: "Sara Alviz",
          value: "Sara Alviz",
          selected: false,
        },
        {
          label: "Scott Waters",
          value: "Scott Waters",
          selected: false,
        },
        {
          label: "Scott Wells",
          value: "Scott Wells",
          selected: false,
        },
        {
          label: "Steve Young",
          value: "Steve Young",
          selected: false,
        },
        {
          label: "Thomas Shelton",
          value: "Thomas Shelton",
          selected: false,
        },
        {
          label: "Thyra Sager",
          value: "Thyra Sager",
          selected: false,
        },
        {
          label: "Tim Paciorek",
          value: "Tim Paciorek",
          selected: false,
        },
      ],
      Product_BU: [
        {
          label: "CML (Applied)",
          value: "CML (Applied)",
          selected: false,
        },
        {
          label: "CML (Light)",
          value: "CML (Light)",
          selected: false,
        },
        {
          label: "Others",
          value: "Others",
          selected: false,
        },
        {
          label: "RES",
          value: "RES",
          selected: false,
        },
        {
          label: "VRF/DLS",
          value: "VRF/DLS",
          selected: false,
        },
      ],
      National_Account: [
        {
          label: "",
          value: "None",
          selected: false,
        },
        {
          label: "81838",
          value: "GENESCO INC",
          selected: false,
        },
        {
          label: "9606",
          value: "BURLINGTON COAT FACTORY",
          selected: false,
        },
        {
          label: "NA7001",
          value: "DISCOUNT TIRE CO.",
          selected: false,
        },
        {
          label: "NA7002",
          value: "Chen Senior Medical Center",
          selected: false,
        },
        {
          label: "NA7004",
          value: "PETCO",
          selected: false,
        },
        {
          label: "NA7007",
          value: "TRADER JOE'S",
          selected: false,
        },
        {
          label: "NA7008",
          value: "BURGER KING",
          selected: false,
        },
        {
          label: "NA7010",
          value: "CBRE - L'OREAL",
          selected: false,
        },
        {
          label: "NA7012",
          value: "HARBOR FREIGHT TOOLS",
          selected: false,
        },
        {
          label: "NA7015",
          value: "Academy Sports",
          selected: false,
        },
        {
          label: "NA7019",
          value: "PEPSICO (FRANCHISE)",
          selected: false,
        },
        {
          label: "NA7042",
          value: "CIGNA",
          selected: false,
        },
        {
          label: "NA7049",
          value: "HCA",
          selected: false,
        },
        {
          label: "NA7050",
          value: "DOUBLE TREE",
          selected: false,
        },
        {
          label: "NA7071",
          value: "RITE Alabel",
          selected: false,
        },
        {
          label: "NA7073",
          value: "DAVE & BUSTERS",
          selected: false,
        },
        {
          label: "NA7082",
          value: "WALGREEN'S",
          selected: false,
        },
        {
          label: "NA7083",
          value: "WENDYS",
          selected: false,
        },
        {
          label: "NA7086",
          value: "FRANCISCAN HEALTH SERVICES",
          selected: false,
        },
        {
          label: "NA7091",
          value: "BANK OF AMERICA",
          selected: false,
        },
        {
          label: "NA7093",
          value: "HILTON HOTELS",
          selected: false,
        },
        {
          label: "NA7094",
          value: "IBM",
          selected: false,
        },
        {
          label: "NA7112",
          value: "Floor and Decor",
          selected: false,
        },
        {
          label: "NA7113",
          value: "RITZ CARLTON HOTEL",
          selected: false,
        },
        {
          label: "NA7122",
          value: "O'REILLY AUTO (SERVICE USA)",
          selected: false,
        },
        {
          label: "NA7129",
          value: "DOLLAR GENERAL",
          selected: false,
        },
        {
          label: "NA7130",
          value: "HEB GROCERY",
          selected: false,
        },
        {
          label: "NA7132",
          value: "BEST BUY",
          selected: false,
        },
        {
          label: "NA7133",
          value: "DPR Construction",
          selected: false,
        },
        {
          label: "NA7136",
          value: "META",
          selected: false,
        },
        {
          label: "NA7137",
          value: "GOOGLE",
          selected: false,
        },
        {
          label: "NA7138",
          value: "CHUY'S FINE TEX-MEX",
          selected: false,
        },
        {
          label: "NA7139",
          value: "PARTY CITY",
          selected: false,
        },
        {
          label: "NA7148",
          value: "CUSHMAN & WAKEFIELD (EAST)",
          selected: false,
        },
        {
          label: "NA7154",
          value: "PRATT & WHITNEY",
          selected: false,
        },
        {
          label: "NA7155",
          value: "ALBERTSON'S",
          selected: false,
        },
        {
          label: "NA7157",
          value: "24 HOUR FITNESS",
          selected: false,
        },
        {
          label: "NA7160",
          value: "LENSCRAFTERS",
          selected: false,
        },
        {
          label: "NA7164",
          value: "CB RICHARD ELLIS/KOLL MGMT. (EAST)",
          selected: false,
        },
        {
          label: "NA7170",
          value: "Tesla",
          selected: false,
        },
        {
          label: "NA7183",
          value: "VONS",
          selected: false,
        },
        {
          label: "NA7186",
          value: "RANDALLS",
          selected: false,
        },
        {
          label: "NA7205",
          value: "CHEVRON CORPORATION",
          selected: false,
        },
        {
          label: "NA7209",
          value: "Omnia Partners",
          selected: false,
        },
        {
          label: "NA7211",
          value: "SIEMENS/LANDIS",
          selected: false,
        },
        {
          label: "NA7238",
          value: "VERIZON",
          selected: false,
        },
        {
          label: "NA7239",
          value: "PREMIER HEALTH CARE",
          selected: false,
        },
        {
          label: "NA7244",
          value: "JONES LANG LASALLE (EAST)",
          selected: false,
        },
        {
          label: "NA7245",
          value: "MCDONALD'S",
          selected: false,
        },
        {
          label: "NA7266",
          value: "GAP",
          selected: false,
        },
        {
          label: "NA7283",
          value: "MACY'S EAST",
          selected: false,
        },
        {
          label: "NA7285",
          value: "WHITE CASTLE",
          selected: false,
        },
        {
          label: "NA7304",
          value: "Heartland Dental",
          selected: false,
        },
        {
          label: "NA7313",
          value: "APPLE COMPUTER",
          selected: false,
        },
        {
          label: "NA7320",
          value: "Chicos",
          selected: false,
        },
        {
          label: "NA7321",
          value: "DOLLAR TREE SOURCING CO LLC",
          selected: false,
        },
        {
          label: "NA7331",
          value: "FAMILY DOLLAR",
          selected: false,
        },
        {
          label: "NA7339",
          value: "HYATT PROPERTIES",
          selected: false,
        },
        {
          label: "NA7349",
          value: "CAVA",
          selected: false,
        },
        {
          label: "NA7353",
          value: "STARBUCKS",
          selected: false,
        },
        {
          label: "NA7354",
          value: "ACME",
          selected: false,
        },
        {
          label: "NA7357",
          value: "PANERA BREAD",
          selected: false,
        },
        {
          label: "NA7361",
          value: "BANANA REPUBLIC",
          selected: false,
        },
        {
          label: "NA7369",
          value: "KIMBERLY CLARK",
          selected: false,
        },
        {
          label: "NA7371",
          value: "Torchy's Tacos",
          selected: false,
        },
        {
          label: "NA7373",
          value: "KFC (FRANCHISE)",
          selected: false,
        },
        {
          label: "NA7386",
          value: "LUXOTTICA",
          selected: false,
        },
        {
          label: "NA7387",
          value: "SUNGLASS HUT TRADING CORP.",
          selected: false,
        },
        {
          label: "NA7398",
          value: "FedEx",
          selected: false,
        },
        {
          label: "NA7401",
          value: "HOME GOODS",
          selected: false,
        },
        {
          label: "NA7409",
          value: "Rivian Automotive",
          selected: false,
        },
        {
          label: "NA7414",
          value: "Octapharma Plasma Inc",
          selected: false,
        },
        {
          label: "NA7419",
          value: "Hobby Lobby Stores Inc",
          selected: false,
        },
        {
          label: "NA7420",
          value: "Direct Supply",
          selected: false,
        },
        {
          label: "NA7421",
          value: "FOUR POINTS",
          selected: false,
        },
        {
          label: "NA7424",
          value: "ST. REGIS",
          selected: false,
        },
        {
          label: "NA7441",
          value: "TACO BELL (FRANCHISE)",
          selected: false,
        },
        {
          label: "NA7461",
          value: "7-ELEVEN",
          selected: false,
        },
        {
          label: "NA7467",
          value: "DOLLAR EXPRESS",
          selected: false,
        },
        {
          label: "NA7470",
          value: "TARGET STORES",
          selected: false,
        },
        {
          label: "NA7478",
          value: "Recreation Equipment Inc (REI)",
          selected: false,
        },
        {
          label: "NA7479",
          value: "Eos Fitness",
          selected: false,
        },
        {
          label: "NA7483",
          value: "Wawa",
          selected: false,
        },
        {
          label: "NA7484",
          value: "BURLINGTON COAT FACTORY",
          selected: false,
        },
        {
          label: "NA7486",
          value: "GARDEN INN",
          selected: false,
        },
        {
          label: "NA7491",
          value: "TURNER LOGISTICS",
          selected: false,
        },
        {
          label: "NA7531",
          value: "DSW",
          selected: false,
        },
        {
          label: "NA7537",
          value: "TJ MAXX",
          selected: false,
        },
        {
          label: "NA7542",
          value: "TIPS",
          selected: false,
        },
        {
          label: "NA7571",
          value: "KAISER-PERMANENTE",
          selected: false,
        },
        {
          label: "NA7572",
          value: "Exelon Corp.",
          selected: false,
        },
        {
          label: "NA7578",
          value: "BANK ONE",
          selected: false,
        },
        {
          label: "NA7587",
          value: "DUPONT",
          selected: false,
        },
        {
          label: "NA7598",
          value: "DISNEY STORES",
          selected: false,
        },
        {
          label: "NA7600",
          value: "DAIRY QUEEN",
          selected: false,
        },
        {
          label: "NA7604",
          value: "CHASE",
          selected: false,
        },
        {
          label: "NA7608",
          value: "JP MORGAN",
          selected: false,
        },
        {
          label: "NA7609",
          value: "FRITO-LAY (FRANCHISE)",
          selected: false,
        },
        {
          label: "NA7616",
          value: "STEAK-N-SHAKE",
          selected: false,
        },
      ],
    };
    // Fetch data
    const result = itemData[data];
    setFilterDataSet(result);

    // After fetching data, ensure pasted items are selected
    const inputValues = inputValue.split(",").map((val) => val.trim());

    // Match the input (pasted) values with fetched data
    const matchedItems = result.filter((item) =>
      inputValues.includes(item.label)
    );

    // Update tempSelectedItems with matched fetched items
    setTempSelectedItems((prevItems) => {
      const uniqueMatchedItems = [...new Set([...prevItems, ...matchedItems])];
      return uniqueMatchedItems;
    });
    setLoadingSpinner(false);
  };

  const filteredData = filterDataSet.filter((item) => {
    const inputValues = filter
      .split(",")
      .map((val) => val.trim().toLowerCase());
    const itemLabel = item.label ? item.label.toLowerCase() : "";
    const itemValue = item.value ? item.value.toLowerCase() : "";

    // Check if any input value matches the item's label or value
    return inputValues.some(
      (input) => itemLabel.includes(input) || itemValue.includes(input)
    );
  });

  const handleSelect = (item) => {
    const isSelected = tempSelectedItems.some((i) => i.label === item.label);
    const newTempSelectedItems = isSelected
      ? tempSelectedItems.filter((i) => i.label !== item.label)
      : [...tempSelectedItems, item];
    setTempSelectedItems(newTempSelectedItems);
  };

  const handleDelete = (item) => {
    const newTempSelectedItems = tempSelectedItems.filter(
      (i) => i.label !== item.label
    );
    setTempSelectedItems(newTempSelectedItems);
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("Text");
    const pastedItems = pasteData
      .split(/[\n,]+|,\s*/)
      .map((item) => item.trim())
      .filter((item) => item);
    const uniquePastedItems = [...new Set(pastedItems)];
    const csvString = uniquePastedItems.join(", ");
    setInputValue(csvString);
  };

  const handleSelectAll = () => {
    if (tempSelectedItems.length === filteredData.length) {
      setTempSelectedItems([]);
    } else {
      setTempSelectedItems(filteredData);
    }
  };

  const handleApply = () => {
    setSelectedItems(tempSelectedItems);
    onSelect(tempSelectedItems);
    setOpen(false);
  };
  const handleCloseDialog = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    handleCancel();
  };
  const handleCancel = () => {
    setTempSelectedItems([]);
    setSelectedItems([]);
    onSelect([]);
    setInputValue("");
    setOpen(false);
  };
  const handleClose = () => {
    setTempSelectedItems([]);
    setSelectedItems([]);
    onSelect([]);
    setOpen(false);
  };
  //setInputValue
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };
  return (
    <>
      <div className={disabled ? "value-help setDisabled" : "value-help"}>
        <input
          id={id}
          type="text"
          placeholder={label}
          value={inputValue}
          onChange={(e) => onChangeInput(e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={disabled ? "setDisabled" : ""}
        />
        <span
          className={disabled ? "setDisabled" : "line-seperator"}
          hidden={f4Hidden}
        ></span>
        <button onClick={fetchFilterData} disabled={disabled} hidden={f4Hidden}>
          <RiCheckboxMultipleBlankLine />
        </button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        disableEscapeKeyDown
        id="dialogHdBtnF4"
        sx={{
          "& .MuiDialog-paper": {
            width: "100%  !important",
            height:'100vh'
          },
        }}
      >
        <DialogTitle className="dialog-header F4Header">
          <span>{label}</span>
          <IconButton
            style={{ position: "absolute", right: 13, top: 15 }} // Position the close icon
            onClick={handleClose}
          >
            <CloseOutlinedIcon />
          </IconButton>
          {/* <button onClick={handleCloseDialog} className="close-button_f4">
            <CloseOutlinedIcon />
          </button> */}
        </DialogTitle>
        <DialogContent className="F4Content">
          <TextField
            label="Search"
            variant="outlined"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "20%",
                marginTop: "10px",
                marginBottom: "10px",

                "& fieldset": {
                  height: "100%",
                },
              },
              "& .MuiInputLabel-root": {
                marginTop: "10px",
                marginBottom: "10px",
              },
            }}
          />
          <div className="list-header">
            <div className="checkbox-container">
              <Checkbox
                checked={tempSelectedItems.length === filteredData.length}
                onChange={handleSelectAll}
              />
            </div>
            <div className="name-container">
              {label.includes("SKU")
                ? label.replace(/SKU/g, "Material").replace("Select ", "")
                : label.replace("Select ", "")}
            </div>
            <div className="description-container description_padding">
              Description
            </div>
          </div>
          <ul className="F4ListNoPadding">
            {filteredData.map((item, index) => (
              <li key={index} className="list-item">
                <div className="checkbox-container">
                  <Checkbox
                    checked={tempSelectedItems.some(
                      (i) => i.label === item.label
                    )}
                    onChange={() => handleSelect(item)}
                  />
                </div>
                <div className="name-container">{item.label}</div>
                <div className="description-container">{item.value}</div>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Button onClick={handleApply}>Apply</Button>
          <Button onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default F4ValueHelp;
