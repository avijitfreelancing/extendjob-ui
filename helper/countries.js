const countries = [
  {
    name: "Afghanistan",
    country_code: "AF",
    country_code2: "AFG",
    calling_code: "93",
    flags: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    },
  },
  {
    name: "Åland Islands",
    country_code: "AX",
    country_code2: "ALA",
    calling_code: "358",
    flags: {
      svg: "https://flagcdn.com/ax.svg",
      png: "https://flagcdn.com/w320/ax.png",
    },
  },
  {
    name: "Albania",
    country_code: "AL",
    country_code2: "ALB",
    calling_code: "355",
    flags: {
      svg: "https://flagcdn.com/al.svg",
      png: "https://flagcdn.com/w320/al.png",
    },
  },
  {
    name: "Algeria",
    country_code: "DZ",
    country_code2: "DZA",
    calling_code: "213",
    flags: {
      svg: "https://flagcdn.com/dz.svg",
      png: "https://flagcdn.com/w320/dz.png",
    },
  },
  {
    name: "American Samoa",
    country_code: "AS",
    country_code2: "ASM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/as.svg",
      png: "https://flagcdn.com/w320/as.png",
    },
  },
  {
    name: "Andorra",
    country_code: "AD",
    country_code2: "AND",
    calling_code: "376",
    flags: {
      svg: "https://flagcdn.com/ad.svg",
      png: "https://flagcdn.com/w320/ad.png",
    },
  },
  {
    name: "Angola",
    country_code: "AO",
    country_code2: "AGO",
    calling_code: "244",
    flags: {
      svg: "https://flagcdn.com/ao.svg",
      png: "https://flagcdn.com/w320/ao.png",
    },
  },
  {
    name: "Anguilla",
    country_code: "AI",
    country_code2: "AIA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/ai.svg",
      png: "https://flagcdn.com/w320/ai.png",
    },
  },
  {
    name: "Antarctica",
    country_code: "AQ",
    country_code2: "ATA",
    calling_code: "672",
    flags: {
      svg: "https://flagcdn.com/aq.svg",
      png: "https://flagcdn.com/w320/aq.png",
    },
  },
  {
    name: "Antigua and Barbuda",
    country_code: "AG",
    country_code2: "ATG",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/ag.svg",
      png: "https://flagcdn.com/w320/ag.png",
    },
  },
  {
    name: "Argentina",
    country_code: "AR",
    country_code2: "ARG",
    calling_code: "54",
    flags: {
      svg: "https://flagcdn.com/ar.svg",
      png: "https://flagcdn.com/w320/ar.png",
    },
  },
  {
    name: "Armenia",
    country_code: "AM",
    country_code2: "ARM",
    calling_code: "374",
    flags: {
      svg: "https://flagcdn.com/am.svg",
      png: "https://flagcdn.com/w320/am.png",
    },
  },
  {
    name: "Aruba",
    country_code: "AW",
    country_code2: "ABW",
    calling_code: "297",
    flags: {
      svg: "https://flagcdn.com/aw.svg",
      png: "https://flagcdn.com/w320/aw.png",
    },
  },
  {
    name: "Australia",
    country_code: "AU",
    country_code2: "AUS",
    calling_code: "61",
    flags: {
      svg: "https://flagcdn.com/au.svg",
      png: "https://flagcdn.com/w320/au.png",
    },
  },
  {
    name: "Austria",
    country_code: "AT",
    country_code2: "AUT",
    calling_code: "43",
    flags: {
      svg: "https://flagcdn.com/at.svg",
      png: "https://flagcdn.com/w320/at.png",
    },
  },
  {
    name: "Azerbaijan",
    country_code: "AZ",
    country_code2: "AZE",
    calling_code: "994",
    flags: {
      svg: "https://flagcdn.com/az.svg",
      png: "https://flagcdn.com/w320/az.png",
    },
  },
  {
    name: "Bahamas",
    country_code: "BS",
    country_code2: "BHS",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/bs.svg",
      png: "https://flagcdn.com/w320/bs.png",
    },
  },
  {
    name: "Bahrain",
    country_code: "BH",
    country_code2: "BHR",
    calling_code: "973",
    flags: {
      svg: "https://flagcdn.com/bh.svg",
      png: "https://flagcdn.com/w320/bh.png",
    },
  },
  {
    name: "Bangladesh",
    country_code: "BD",
    country_code2: "BGD",
    calling_code: "880",
    flags: {
      svg: "https://flagcdn.com/bd.svg",
      png: "https://flagcdn.com/w320/bd.png",
    },
  },
  {
    name: "Barbados",
    country_code: "BB",
    country_code2: "BRB",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/bb.svg",
      png: "https://flagcdn.com/w320/bb.png",
    },
  },
  {
    name: "Belarus",
    country_code: "BY",
    country_code2: "BLR",
    calling_code: "375",
    flags: {
      svg: "https://flagcdn.com/by.svg",
      png: "https://flagcdn.com/w320/by.png",
    },
  },
  {
    name: "Belgium",
    country_code: "BE",
    country_code2: "BEL",
    calling_code: "32",
    flags: {
      svg: "https://flagcdn.com/be.svg",
      png: "https://flagcdn.com/w320/be.png",
    },
  },
  {
    name: "Belize",
    country_code: "BZ",
    country_code2: "BLZ",
    calling_code: "501",
    flags: {
      svg: "https://flagcdn.com/bz.svg",
      png: "https://flagcdn.com/w320/bz.png",
    },
  },
  {
    name: "Benin",
    country_code: "BJ",
    country_code2: "BEN",
    calling_code: "229",
    flags: {
      svg: "https://flagcdn.com/bj.svg",
      png: "https://flagcdn.com/w320/bj.png",
    },
  },
  {
    name: "Bermuda",
    country_code: "BM",
    country_code2: "BMU",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/bm.svg",
      png: "https://flagcdn.com/w320/bm.png",
    },
  },
  {
    name: "Bhutan",
    country_code: "BT",
    country_code2: "BTN",
    calling_code: "975",
    flags: {
      svg: "https://flagcdn.com/bt.svg",
      png: "https://flagcdn.com/w320/bt.png",
    },
  },
  {
    name: "Bolivia (Plurinational State of)",
    country_code: "BO",
    country_code2: "BOL",
    calling_code: "591",
    flags: {
      svg: "https://flagcdn.com/bo.svg",
      png: "https://flagcdn.com/w320/bo.png",
    },
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    country_code: "BQ",
    country_code2: "BES",
    calling_code: "599",
    flags: {
      svg: "https://flagcdn.com/bq.svg",
      png: "https://flagcdn.com/w320/bq.png",
    },
  },
  {
    name: "Bosnia and Herzegovina",
    country_code: "BA",
    country_code2: "BIH",
    calling_code: "387",
    flags: {
      svg: "https://flagcdn.com/ba.svg",
      png: "https://flagcdn.com/w320/ba.png",
    },
  },
  {
    name: "Botswana",
    country_code: "BW",
    country_code2: "BWA",
    calling_code: "267",
    flags: {
      svg: "https://flagcdn.com/bw.svg",
      png: "https://flagcdn.com/w320/bw.png",
    },
  },
  {
    name: "Bouvet Island",
    country_code: "BV",
    country_code2: "BVT",
    calling_code: "47",
    flags: {
      svg: "https://flagcdn.com/bv.svg",
      png: "https://flagcdn.com/w320/bv.png",
    },
  },
  {
    name: "Brazil",
    country_code: "BR",
    country_code2: "BRA",
    calling_code: "55",
    flags: {
      svg: "https://flagcdn.com/br.svg",
      png: "https://flagcdn.com/w320/br.png",
    },
  },
  {
    name: "British Indian Ocean Territory",
    country_code: "IO",
    country_code2: "IOT",
    calling_code: "246",
    flags: {
      svg: "https://flagcdn.com/io.svg",
      png: "https://flagcdn.com/w320/io.png",
    },
  },
  {
    name: "United States Minor Outlying Islands",
    country_code: "UM",
    country_code2: "UMI",
    calling_code: "246",
    flags: {
      svg: "https://flagcdn.com/um.svg",
      png: "https://flagcdn.com/w320/um.png",
    },
  },
  {
    name: "Virgin Islands (British)",
    country_code: "VG",
    country_code2: "VGB",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/vg.svg",
      png: "https://flagcdn.com/w320/vg.png",
    },
  },
  {
    name: "Virgin Islands (U.S.)",
    country_code: "VI",
    country_code2: "VIR",
    calling_code: "1 340",
    flags: {
      svg: "https://flagcdn.com/vi.svg",
      png: "https://flagcdn.com/w320/vi.png",
    },
  },
  {
    name: "Brunei Darussalam",
    country_code: "BN",
    country_code2: "BRN",
    calling_code: "673",
    flags: {
      svg: "https://flagcdn.com/bn.svg",
      png: "https://flagcdn.com/w320/bn.png",
    },
  },
  {
    name: "Bulgaria",
    country_code: "BG",
    country_code2: "BGR",
    calling_code: "359",
    flags: {
      svg: "https://flagcdn.com/bg.svg",
      png: "https://flagcdn.com/w320/bg.png",
    },
  },
  {
    name: "Burkina Faso",
    country_code: "BF",
    country_code2: "BFA",
    calling_code: "226",
    flags: {
      svg: "https://flagcdn.com/bf.svg",
      png: "https://flagcdn.com/w320/bf.png",
    },
  },
  {
    name: "Burundi",
    country_code: "BI",
    country_code2: "BDI",
    calling_code: "257",
    flags: {
      svg: "https://flagcdn.com/bi.svg",
      png: "https://flagcdn.com/w320/bi.png",
    },
  },
  {
    name: "Cambodia",
    country_code: "KH",
    country_code2: "KHM",
    calling_code: "855",
    flags: {
      svg: "https://flagcdn.com/kh.svg",
      png: "https://flagcdn.com/w320/kh.png",
    },
  },
  {
    name: "Cameroon",
    country_code: "CM",
    country_code2: "CMR",
    calling_code: "237",
    flags: {
      svg: "https://flagcdn.com/cm.svg",
      png: "https://flagcdn.com/w320/cm.png",
    },
  },
  {
    name: "Canada",
    country_code: "CA",
    country_code2: "CAN",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/ca.svg",
      png: "https://flagcdn.com/w320/ca.png",
    },
  },
  {
    name: "Cabo Verde",
    country_code: "CV",
    country_code2: "CPV",
    calling_code: "238",
    flags: {
      svg: "https://flagcdn.com/cv.svg",
      png: "https://flagcdn.com/w320/cv.png",
    },
  },
  {
    name: "Cayman Islands",
    country_code: "KY",
    country_code2: "CYM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/ky.svg",
      png: "https://flagcdn.com/w320/ky.png",
    },
  },
  {
    name: "Central African Republic",
    country_code: "CF",
    country_code2: "CAF",
    calling_code: "236",
    flags: {
      svg: "https://flagcdn.com/cf.svg",
      png: "https://flagcdn.com/w320/cf.png",
    },
  },
  {
    name: "Chad",
    country_code: "TD",
    country_code2: "TCD",
    calling_code: "235",
    flags: {
      svg: "https://flagcdn.com/td.svg",
      png: "https://flagcdn.com/w320/td.png",
    },
  },
  {
    name: "Chile",
    country_code: "CL",
    country_code2: "CHL",
    calling_code: "56",
    flags: {
      svg: "https://flagcdn.com/cl.svg",
      png: "https://flagcdn.com/w320/cl.png",
    },
  },
  {
    name: "China",
    country_code: "CN",
    country_code2: "CHN",
    calling_code: "86",
    flags: {
      svg: "https://flagcdn.com/cn.svg",
      png: "https://flagcdn.com/w320/cn.png",
    },
  },
  {
    name: "Christmas Island",
    country_code: "CX",
    country_code2: "CXR",
    calling_code: "61",
    flags: {
      svg: "https://flagcdn.com/cx.svg",
      png: "https://flagcdn.com/w320/cx.png",
    },
  },
  {
    name: "Cocos (Keeling) Islands",
    country_code: "CC",
    country_code2: "CCK",
    calling_code: "61",
    flags: {
      svg: "https://flagcdn.com/cc.svg",
      png: "https://flagcdn.com/w320/cc.png",
    },
  },
  {
    name: "Colombia",
    country_code: "CO",
    country_code2: "COL",
    calling_code: "57",
    flags: {
      svg: "https://flagcdn.com/co.svg",
      png: "https://flagcdn.com/w320/co.png",
    },
  },
  {
    name: "Comoros",
    country_code: "KM",
    country_code2: "COM",
    calling_code: "269",
    flags: {
      svg: "https://flagcdn.com/km.svg",
      png: "https://flagcdn.com/w320/km.png",
    },
  },
  {
    name: "Congo",
    country_code: "CG",
    country_code2: "COG",
    calling_code: "242",
    flags: {
      svg: "https://flagcdn.com/cg.svg",
      png: "https://flagcdn.com/w320/cg.png",
    },
  },
  {
    name: "Congo (Democratic Republic of the)",
    country_code: "CD",
    country_code2: "COD",
    calling_code: "243",
    flags: {
      svg: "https://flagcdn.com/cd.svg",
      png: "https://flagcdn.com/w320/cd.png",
    },
  },
  {
    name: "Cook Islands",
    country_code: "CK",
    country_code2: "COK",
    calling_code: "682",
    flags: {
      svg: "https://flagcdn.com/ck.svg",
      png: "https://flagcdn.com/w320/ck.png",
    },
  },
  {
    name: "Costa Rica",
    country_code: "CR",
    country_code2: "CRI",
    calling_code: "506",
    flags: {
      svg: "https://flagcdn.com/cr.svg",
      png: "https://flagcdn.com/w320/cr.png",
    },
  },
  {
    name: "Croatia",
    country_code: "HR",
    country_code2: "HRV",
    calling_code: "385",
    flags: {
      svg: "https://flagcdn.com/hr.svg",
      png: "https://flagcdn.com/w320/hr.png",
    },
  },
  {
    name: "Cuba",
    country_code: "CU",
    country_code2: "CUB",
    calling_code: "53",
    flags: {
      svg: "https://flagcdn.com/cu.svg",
      png: "https://flagcdn.com/w320/cu.png",
    },
  },
  {
    name: "Curaçao",
    country_code: "CW",
    country_code2: "CUW",
    calling_code: "599",
    flags: {
      svg: "https://flagcdn.com/cw.svg",
      png: "https://flagcdn.com/w320/cw.png",
    },
  },
  {
    name: "Cyprus",
    country_code: "CY",
    country_code2: "CYP",
    calling_code: "357",
    flags: {
      svg: "https://flagcdn.com/cy.svg",
      png: "https://flagcdn.com/w320/cy.png",
    },
  },
  {
    name: "Czech Republic",
    country_code: "CZ",
    country_code2: "CZE",
    calling_code: "420",
    flags: {
      svg: "https://flagcdn.com/cz.svg",
      png: "https://flagcdn.com/w320/cz.png",
    },
  },
  {
    name: "Denmark",
    country_code: "DK",
    country_code2: "DNK",
    calling_code: "45",
    flags: {
      svg: "https://flagcdn.com/dk.svg",
      png: "https://flagcdn.com/w320/dk.png",
    },
  },
  {
    name: "Djibouti",
    country_code: "DJ",
    country_code2: "DJI",
    calling_code: "253",
    flags: {
      svg: "https://flagcdn.com/dj.svg",
      png: "https://flagcdn.com/w320/dj.png",
    },
  },
  {
    name: "Dominica",
    country_code: "DM",
    country_code2: "DMA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/dm.svg",
      png: "https://flagcdn.com/w320/dm.png",
    },
  },
  {
    name: "Dominican Republic",
    country_code: "DO",
    country_code2: "DOM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/do.svg",
      png: "https://flagcdn.com/w320/do.png",
    },
  },
  {
    name: "Ecuador",
    country_code: "EC",
    country_code2: "ECU",
    calling_code: "593",
    flags: {
      svg: "https://flagcdn.com/ec.svg",
      png: "https://flagcdn.com/w320/ec.png",
    },
  },
  {
    name: "Egypt",
    country_code: "EG",
    country_code2: "EGY",
    calling_code: "20",
    flags: {
      svg: "https://flagcdn.com/eg.svg",
      png: "https://flagcdn.com/w320/eg.png",
    },
  },
  {
    name: "El Salvador",
    country_code: "SV",
    country_code2: "SLV",
    calling_code: "503",
    flags: {
      svg: "https://flagcdn.com/sv.svg",
      png: "https://flagcdn.com/w320/sv.png",
    },
  },
  {
    name: "Equatorial Guinea",
    country_code: "GQ",
    country_code2: "GNQ",
    calling_code: "240",
    flags: {
      svg: "https://flagcdn.com/gq.svg",
      png: "https://flagcdn.com/w320/gq.png",
    },
  },
  {
    name: "Eritrea",
    country_code: "ER",
    country_code2: "ERI",
    calling_code: "291",
    flags: {
      svg: "https://flagcdn.com/er.svg",
      png: "https://flagcdn.com/w320/er.png",
    },
  },
  {
    name: "Estonia",
    country_code: "EE",
    country_code2: "EST",
    calling_code: "372",
    flags: {
      svg: "https://flagcdn.com/ee.svg",
      png: "https://flagcdn.com/w320/ee.png",
    },
  },
  {
    name: "Ethiopia",
    country_code: "ET",
    country_code2: "ETH",
    calling_code: "251",
    flags: {
      svg: "https://flagcdn.com/et.svg",
      png: "https://flagcdn.com/w320/et.png",
    },
  },
  {
    name: "Falkland Islands (Malvinas)",
    country_code: "FK",
    country_code2: "FLK",
    calling_code: "500",
    flags: {
      svg: "https://flagcdn.com/fk.svg",
      png: "https://flagcdn.com/w320/fk.png",
    },
  },
  {
    name: "Faroe Islands",
    country_code: "FO",
    country_code2: "FRO",
    calling_code: "298",
    flags: {
      svg: "https://flagcdn.com/fo.svg",
      png: "https://flagcdn.com/w320/fo.png",
    },
  },
  {
    name: "Fiji",
    country_code: "FJ",
    country_code2: "FJI",
    calling_code: "679",
    flags: {
      svg: "https://flagcdn.com/fj.svg",
      png: "https://flagcdn.com/w320/fj.png",
    },
  },
  {
    name: "Finland",
    country_code: "FI",
    country_code2: "FIN",
    calling_code: "358",
    flags: {
      svg: "https://flagcdn.com/fi.svg",
      png: "https://flagcdn.com/w320/fi.png",
    },
  },
  {
    name: "France",
    country_code: "FR",
    country_code2: "FRA",
    calling_code: "33",
    flags: {
      svg: "https://flagcdn.com/fr.svg",
      png: "https://flagcdn.com/w320/fr.png",
    },
  },
  {
    name: "French Guiana",
    country_code: "GF",
    country_code2: "GUF",
    calling_code: "594",
    flags: {
      svg: "https://flagcdn.com/gf.svg",
      png: "https://flagcdn.com/w320/gf.png",
    },
  },
  {
    name: "French Polynesia",
    country_code: "PF",
    country_code2: "PYF",
    calling_code: "689",
    flags: {
      svg: "https://flagcdn.com/pf.svg",
      png: "https://flagcdn.com/w320/pf.png",
    },
  },
  {
    name: "French Southern Territories",
    country_code: "TF",
    country_code2: "ATF",
    calling_code: "262",
    flags: {
      svg: "https://flagcdn.com/tf.svg",
      png: "https://flagcdn.com/w320/tf.png",
    },
  },
  {
    name: "Gabon",
    country_code: "GA",
    country_code2: "GAB",
    calling_code: "241",
    flags: {
      svg: "https://flagcdn.com/ga.svg",
      png: "https://flagcdn.com/w320/ga.png",
    },
  },
  {
    name: "Gambia",
    country_code: "GM",
    country_code2: "GMB",
    calling_code: "220",
    flags: {
      svg: "https://flagcdn.com/gm.svg",
      png: "https://flagcdn.com/w320/gm.png",
    },
  },
  {
    name: "Georgia",
    country_code: "GE",
    country_code2: "GEO",
    calling_code: "995",
    flags: {
      svg: "https://flagcdn.com/ge.svg",
      png: "https://flagcdn.com/w320/ge.png",
    },
  },
  {
    name: "Germany",
    country_code: "DE",
    country_code2: "DEU",
    calling_code: "49",
    flags: {
      svg: "https://flagcdn.com/de.svg",
      png: "https://flagcdn.com/w320/de.png",
    },
  },
  {
    name: "Ghana",
    country_code: "GH",
    country_code2: "GHA",
    calling_code: "233",
    flags: {
      svg: "https://flagcdn.com/gh.svg",
      png: "https://flagcdn.com/w320/gh.png",
    },
  },
  {
    name: "Gibraltar",
    country_code: "GI",
    country_code2: "GIB",
    calling_code: "350",
    flags: {
      svg: "https://flagcdn.com/gi.svg",
      png: "https://flagcdn.com/w320/gi.png",
    },
  },
  {
    name: "Greece",
    country_code: "GR",
    country_code2: "GRC",
    calling_code: "30",
    flags: {
      svg: "https://flagcdn.com/gr.svg",
      png: "https://flagcdn.com/w320/gr.png",
    },
  },
  {
    name: "Greenland",
    country_code: "GL",
    country_code2: "GRL",
    calling_code: "299",
    flags: {
      svg: "https://flagcdn.com/gl.svg",
      png: "https://flagcdn.com/w320/gl.png",
    },
  },
  {
    name: "Grenada",
    country_code: "GD",
    country_code2: "GRD",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/gd.svg",
      png: "https://flagcdn.com/w320/gd.png",
    },
  },
  {
    name: "Guadeloupe",
    country_code: "GP",
    country_code2: "GLP",
    calling_code: "590",
    flags: {
      svg: "https://flagcdn.com/gp.svg",
      png: "https://flagcdn.com/w320/gp.png",
    },
  },
  {
    name: "Guam",
    country_code: "GU",
    country_code2: "GUM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/gu.svg",
      png: "https://flagcdn.com/w320/gu.png",
    },
  },
  {
    name: "Guatemala",
    country_code: "GT",
    country_code2: "GTM",
    calling_code: "502",
    flags: {
      svg: "https://flagcdn.com/gt.svg",
      png: "https://flagcdn.com/w320/gt.png",
    },
  },
  {
    name: "Guernsey",
    country_code: "GG",
    country_code2: "GGY",
    calling_code: "44",
    flags: {
      svg: "https://flagcdn.com/gg.svg",
      png: "https://flagcdn.com/w320/gg.png",
    },
  },
  {
    name: "Guinea",
    country_code: "GN",
    country_code2: "GIN",
    calling_code: "224",
    flags: {
      svg: "https://flagcdn.com/gn.svg",
      png: "https://flagcdn.com/w320/gn.png",
    },
  },
  {
    name: "Guinea-Bissau",
    country_code: "GW",
    country_code2: "GNB",
    calling_code: "245",
    flags: {
      svg: "https://flagcdn.com/gw.svg",
      png: "https://flagcdn.com/w320/gw.png",
    },
  },
  {
    name: "Guyana",
    country_code: "GY",
    country_code2: "GUY",
    calling_code: "592",
    flags: {
      svg: "https://flagcdn.com/gy.svg",
      png: "https://flagcdn.com/w320/gy.png",
    },
  },
  {
    name: "Haiti",
    country_code: "HT",
    country_code2: "HTI",
    calling_code: "509",
    flags: {
      svg: "https://flagcdn.com/ht.svg",
      png: "https://flagcdn.com/w320/ht.png",
    },
  },
  {
    name: "Heard Island and McDonald Islands",
    country_code: "HM",
    country_code2: "HMD",
    calling_code: "672",
    flags: {
      svg: "https://flagcdn.com/hm.svg",
      png: "https://flagcdn.com/w320/hm.png",
    },
  },
  {
    name: "Vatican City",
    country_code: "VA",
    country_code2: "VAT",
    calling_code: "379",
    flags: {
      svg: "https://flagcdn.com/va.svg",
      png: "https://flagcdn.com/w320/va.png",
    },
  },
  {
    name: "Honduras",
    country_code: "HN",
    country_code2: "HND",
    calling_code: "504",
    flags: {
      svg: "https://flagcdn.com/hn.svg",
      png: "https://flagcdn.com/w320/hn.png",
    },
  },
  {
    name: "Hungary",
    country_code: "HU",
    country_code2: "HUN",
    calling_code: "36",
    flags: {
      svg: "https://flagcdn.com/hu.svg",
      png: "https://flagcdn.com/w320/hu.png",
    },
  },
  {
    name: "Hong Kong",
    country_code: "HK",
    country_code2: "HKG",
    calling_code: "852",
    flags: {
      svg: "https://flagcdn.com/hk.svg",
      png: "https://flagcdn.com/w320/hk.png",
    },
  },
  {
    name: "Iceland",
    country_code: "IS",
    country_code2: "ISL",
    calling_code: "354",
    flags: {
      svg: "https://flagcdn.com/is.svg",
      png: "https://flagcdn.com/w320/is.png",
    },
  },
  {
    name: "India",
    country_code: "IN",
    country_code2: "IND",
    calling_code: "91",
    flags: {
      svg: "https://flagcdn.com/in.svg",
      png: "https://flagcdn.com/w320/in.png",
    },
  },
  {
    name: "Indonesia",
    country_code: "ID",
    country_code2: "IDN",
    calling_code: "62",
    flags: {
      svg: "https://flagcdn.com/id.svg",
      png: "https://flagcdn.com/w320/id.png",
    },
  },
  {
    name: "Ivory Coast",
    country_code: "CI",
    country_code2: "CIV",
    calling_code: "225",
    flags: {
      svg: "https://flagcdn.com/ci.svg",
      png: "https://flagcdn.com/w320/ci.png",
    },
  },
  {
    name: "Iran (Islamic Republic of)",
    country_code: "IR",
    country_code2: "IRN",
    calling_code: "98",
    flags: {
      svg: "https://flagcdn.com/ir.svg",
      png: "https://flagcdn.com/w320/ir.png",
    },
  },
  {
    name: "Iraq",
    country_code: "IQ",
    country_code2: "IRQ",
    calling_code: "964",
    flags: {
      svg: "https://flagcdn.com/iq.svg",
      png: "https://flagcdn.com/w320/iq.png",
    },
  },
  {
    name: "Ireland",
    country_code: "IE",
    country_code2: "IRL",
    calling_code: "353",
    flags: {
      svg: "https://flagcdn.com/ie.svg",
      png: "https://flagcdn.com/w320/ie.png",
    },
  },
  {
    name: "Isle of Man",
    country_code: "IM",
    country_code2: "IMN",
    calling_code: "44",
    flags: {
      svg: "https://flagcdn.com/im.svg",
      png: "https://flagcdn.com/w320/im.png",
    },
  },
  {
    name: "Israel",
    country_code: "IL",
    country_code2: "ISR",
    calling_code: "972",
    flags: {
      svg: "https://flagcdn.com/il.svg",
      png: "https://flagcdn.com/w320/il.png",
    },
  },
  {
    name: "Italy",
    country_code: "IT",
    country_code2: "ITA",
    calling_code: "39",
    flags: {
      svg: "https://flagcdn.com/it.svg",
      png: "https://flagcdn.com/w320/it.png",
    },
  },
  {
    name: "Jamaica",
    country_code: "JM",
    country_code2: "JAM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/jm.svg",
      png: "https://flagcdn.com/w320/jm.png",
    },
  },
  {
    name: "Japan",
    country_code: "JP",
    country_code2: "JPN",
    calling_code: "81",
    flags: {
      svg: "https://flagcdn.com/jp.svg",
      png: "https://flagcdn.com/w320/jp.png",
    },
  },
  {
    name: "Jersey",
    country_code: "JE",
    country_code2: "JEY",
    calling_code: "44",
    flags: {
      svg: "https://flagcdn.com/je.svg",
      png: "https://flagcdn.com/w320/je.png",
    },
  },
  {
    name: "Jordan",
    country_code: "JO",
    country_code2: "JOR",
    calling_code: "962",
    flags: {
      svg: "https://flagcdn.com/jo.svg",
      png: "https://flagcdn.com/w320/jo.png",
    },
  },
  {
    name: "Kazakhstan",
    country_code: "KZ",
    country_code2: "KAZ",
    calling_code: "76",
    flags: {
      svg: "https://flagcdn.com/kz.svg",
      png: "https://flagcdn.com/w320/kz.png",
    },
  },
  {
    name: "Kenya",
    country_code: "KE",
    country_code2: "KEN",
    calling_code: "254",
    flags: {
      svg: "https://flagcdn.com/ke.svg",
      png: "https://flagcdn.com/w320/ke.png",
    },
  },
  {
    name: "Kiribati",
    country_code: "KI",
    country_code2: "KIR",
    calling_code: "686",
    flags: {
      svg: "https://flagcdn.com/ki.svg",
      png: "https://flagcdn.com/w320/ki.png",
    },
  },
  {
    name: "Kuwait",
    country_code: "KW",
    country_code2: "KWT",
    calling_code: "965",
    flags: {
      svg: "https://flagcdn.com/kw.svg",
      png: "https://flagcdn.com/w320/kw.png",
    },
  },
  {
    name: "Kyrgyzstan",
    country_code: "KG",
    country_code2: "KGZ",
    calling_code: "996",
    flags: {
      svg: "https://flagcdn.com/kg.svg",
      png: "https://flagcdn.com/w320/kg.png",
    },
  },
  {
    name: "Lao People's Democratic Republic",
    country_code: "LA",
    country_code2: "LAO",
    calling_code: "856",
    flags: {
      svg: "https://flagcdn.com/la.svg",
      png: "https://flagcdn.com/w320/la.png",
    },
  },
  {
    name: "Latvia",
    country_code: "LV",
    country_code2: "LVA",
    calling_code: "371",
    flags: {
      svg: "https://flagcdn.com/lv.svg",
      png: "https://flagcdn.com/w320/lv.png",
    },
  },
  {
    name: "Lebanon",
    country_code: "LB",
    country_code2: "LBN",
    calling_code: "961",
    flags: {
      svg: "https://flagcdn.com/lb.svg",
      png: "https://flagcdn.com/w320/lb.png",
    },
  },
  {
    name: "Lesotho",
    country_code: "LS",
    country_code2: "LSO",
    calling_code: "266",
    flags: {
      svg: "https://flagcdn.com/ls.svg",
      png: "https://flagcdn.com/w320/ls.png",
    },
  },
  {
    name: "Liberia",
    country_code: "LR",
    country_code2: "LBR",
    calling_code: "231",
    flags: {
      svg: "https://flagcdn.com/lr.svg",
      png: "https://flagcdn.com/w320/lr.png",
    },
  },
  {
    name: "Libya",
    country_code: "LY",
    country_code2: "LBY",
    calling_code: "218",
    flags: {
      svg: "https://flagcdn.com/ly.svg",
      png: "https://flagcdn.com/w320/ly.png",
    },
  },
  {
    name: "Liechtenstein",
    country_code: "LI",
    country_code2: "LIE",
    calling_code: "423",
    flags: {
      svg: "https://flagcdn.com/li.svg",
      png: "https://flagcdn.com/w320/li.png",
    },
  },
  {
    name: "Lithuania",
    country_code: "LT",
    country_code2: "LTU",
    calling_code: "370",
    flags: {
      svg: "https://flagcdn.com/lt.svg",
      png: "https://flagcdn.com/w320/lt.png",
    },
  },
  {
    name: "Luxembourg",
    country_code: "LU",
    country_code2: "LUX",
    calling_code: "352",
    flags: {
      svg: "https://flagcdn.com/lu.svg",
      png: "https://flagcdn.com/w320/lu.png",
    },
  },
  {
    name: "Macao",
    country_code: "MO",
    country_code2: "MAC",
    calling_code: "853",
    flags: {
      svg: "https://flagcdn.com/mo.svg",
      png: "https://flagcdn.com/w320/mo.png",
    },
  },
  {
    name: "North Macedonia",
    country_code: "MK",
    country_code2: "MKD",
    calling_code: "389",
    flags: {
      svg: "https://flagcdn.com/mk.svg",
      png: "https://flagcdn.com/w320/mk.png",
    },
  },
  {
    name: "Madagascar",
    country_code: "MG",
    country_code2: "MDG",
    calling_code: "261",
    flags: {
      svg: "https://flagcdn.com/mg.svg",
      png: "https://flagcdn.com/w320/mg.png",
    },
  },
  {
    name: "Malawi",
    country_code: "MW",
    country_code2: "MWI",
    calling_code: "265",
    flags: {
      svg: "https://flagcdn.com/mw.svg",
      png: "https://flagcdn.com/w320/mw.png",
    },
  },
  {
    name: "Malaysia",
    country_code: "MY",
    country_code2: "MYS",
    calling_code: "60",
    flags: {
      svg: "https://flagcdn.com/my.svg",
      png: "https://flagcdn.com/w320/my.png",
    },
  },
  {
    name: "Maldives",
    country_code: "MV",
    country_code2: "MDV",
    calling_code: "960",
    flags: {
      svg: "https://flagcdn.com/mv.svg",
      png: "https://flagcdn.com/w320/mv.png",
    },
  },
  {
    name: "Mali",
    country_code: "ML",
    country_code2: "MLI",
    calling_code: "223",
    flags: {
      svg: "https://flagcdn.com/ml.svg",
      png: "https://flagcdn.com/w320/ml.png",
    },
  },
  {
    name: "Malta",
    country_code: "MT",
    country_code2: "MLT",
    calling_code: "356",
    flags: {
      svg: "https://flagcdn.com/mt.svg",
      png: "https://flagcdn.com/w320/mt.png",
    },
  },
  {
    name: "Marshall Islands",
    country_code: "MH",
    country_code2: "MHL",
    calling_code: "692",
    flags: {
      svg: "https://flagcdn.com/mh.svg",
      png: "https://flagcdn.com/w320/mh.png",
    },
  },
  {
    name: "Martinique",
    country_code: "MQ",
    country_code2: "MTQ",
    calling_code: "596",
    flags: {
      svg: "https://flagcdn.com/mq.svg",
      png: "https://flagcdn.com/w320/mq.png",
    },
  },
  {
    name: "Mauritania",
    country_code: "MR",
    country_code2: "MRT",
    calling_code: "222",
    flags: {
      svg: "https://flagcdn.com/mr.svg",
      png: "https://flagcdn.com/w320/mr.png",
    },
  },
  {
    name: "Mauritius",
    country_code: "MU",
    country_code2: "MUS",
    calling_code: "230",
    flags: {
      svg: "https://flagcdn.com/mu.svg",
      png: "https://flagcdn.com/w320/mu.png",
    },
  },
  {
    name: "Mayotte",
    country_code: "YT",
    country_code2: "MYT",
    calling_code: "262",
    flags: {
      svg: "https://flagcdn.com/yt.svg",
      png: "https://flagcdn.com/w320/yt.png",
    },
  },
  {
    name: "Mexico",
    country_code: "MX",
    country_code2: "MEX",
    calling_code: "52",
    flags: {
      svg: "https://flagcdn.com/mx.svg",
      png: "https://flagcdn.com/w320/mx.png",
    },
  },
  {
    name: "Micronesia (Federated States of)",
    country_code: "FM",
    country_code2: "FSM",
    calling_code: "691",
    flags: {
      svg: "https://flagcdn.com/fm.svg",
      png: "https://flagcdn.com/w320/fm.png",
    },
  },
  {
    name: "Moldova (Republic of)",
    country_code: "MD",
    country_code2: "MDA",
    calling_code: "373",
    flags: {
      svg: "https://flagcdn.com/md.svg",
      png: "https://flagcdn.com/w320/md.png",
    },
  },
  {
    name: "Monaco",
    country_code: "MC",
    country_code2: "MCO",
    calling_code: "377",
    flags: {
      svg: "https://flagcdn.com/mc.svg",
      png: "https://flagcdn.com/w320/mc.png",
    },
  },
  {
    name: "Mongolia",
    country_code: "MN",
    country_code2: "MNG",
    calling_code: "976",
    flags: {
      svg: "https://flagcdn.com/mn.svg",
      png: "https://flagcdn.com/w320/mn.png",
    },
  },
  {
    name: "Montenegro",
    country_code: "ME",
    country_code2: "MNE",
    calling_code: "382",
    flags: {
      svg: "https://flagcdn.com/me.svg",
      png: "https://flagcdn.com/w320/me.png",
    },
  },
  {
    name: "Montserrat",
    country_code: "MS",
    country_code2: "MSR",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/ms.svg",
      png: "https://flagcdn.com/w320/ms.png",
    },
  },
  {
    name: "Morocco",
    country_code: "MA",
    country_code2: "MAR",
    calling_code: "212",
    flags: {
      svg: "https://flagcdn.com/ma.svg",
      png: "https://flagcdn.com/w320/ma.png",
    },
  },
  {
    name: "Mozambique",
    country_code: "MZ",
    country_code2: "MOZ",
    calling_code: "258",
    flags: {
      svg: "https://flagcdn.com/mz.svg",
      png: "https://flagcdn.com/w320/mz.png",
    },
  },
  {
    name: "Myanmar",
    country_code: "MM",
    country_code2: "MMR",
    calling_code: "95",
    flags: {
      svg: "https://flagcdn.com/mm.svg",
      png: "https://flagcdn.com/w320/mm.png",
    },
  },
  {
    name: "Namibia",
    country_code: "NA",
    country_code2: "NAM",
    calling_code: "264",
    flags: {
      svg: "https://flagcdn.com/na.svg",
      png: "https://flagcdn.com/w320/na.png",
    },
  },
  {
    name: "Nauru",
    country_code: "NR",
    country_code2: "NRU",
    calling_code: "674",
    flags: {
      svg: "https://flagcdn.com/nr.svg",
      png: "https://flagcdn.com/w320/nr.png",
    },
  },
  {
    name: "Nepal",
    country_code: "NP",
    country_code2: "NPL",
    calling_code: "977",
    flags: {
      svg: "https://flagcdn.com/np.svg",
      png: "https://flagcdn.com/w320/np.png",
    },
  },
  {
    name: "Netherlands",
    country_code: "NL",
    country_code2: "NLD",
    calling_code: "31",
    flags: {
      svg: "https://flagcdn.com/nl.svg",
      png: "https://flagcdn.com/w320/nl.png",
    },
  },
  {
    name: "New Caledonia",
    country_code: "NC",
    country_code2: "NCL",
    calling_code: "687",
    flags: {
      svg: "https://flagcdn.com/nc.svg",
      png: "https://flagcdn.com/w320/nc.png",
    },
  },
  {
    name: "New Zealand",
    country_code: "NZ",
    country_code2: "NZL",
    calling_code: "64",
    flags: {
      svg: "https://flagcdn.com/nz.svg",
      png: "https://flagcdn.com/w320/nz.png",
    },
  },
  {
    name: "Nicaragua",
    country_code: "NI",
    country_code2: "NIC",
    calling_code: "505",
    flags: {
      svg: "https://flagcdn.com/ni.svg",
      png: "https://flagcdn.com/w320/ni.png",
    },
  },
  {
    name: "Niger",
    country_code: "NE",
    country_code2: "NER",
    calling_code: "227",
    flags: {
      svg: "https://flagcdn.com/ne.svg",
      png: "https://flagcdn.com/w320/ne.png",
    },
  },
  {
    name: "Nigeria",
    country_code: "NG",
    country_code2: "NGA",
    calling_code: "234",
    flags: {
      svg: "https://flagcdn.com/ng.svg",
      png: "https://flagcdn.com/w320/ng.png",
    },
  },
  {
    name: "Niue",
    country_code: "NU",
    country_code2: "NIU",
    calling_code: "683",
    flags: {
      svg: "https://flagcdn.com/nu.svg",
      png: "https://flagcdn.com/w320/nu.png",
    },
  },
  {
    name: "Norfolk Island",
    country_code: "NF",
    country_code2: "NFK",
    calling_code: "672",
    flags: {
      svg: "https://flagcdn.com/nf.svg",
      png: "https://flagcdn.com/w320/nf.png",
    },
  },
  {
    name: "Korea (Democratic People's Republic of)",
    country_code: "KP",
    country_code2: "PRK",
    calling_code: "850",
    flags: {
      svg: "https://flagcdn.com/kp.svg",
      png: "https://flagcdn.com/w320/kp.png",
    },
  },
  {
    name: "Northern Mariana Islands",
    country_code: "MP",
    country_code2: "MNP",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/mp.svg",
      png: "https://flagcdn.com/w320/mp.png",
    },
  },
  {
    name: "Norway",
    country_code: "NO",
    country_code2: "NOR",
    calling_code: "47",
    flags: {
      svg: "https://flagcdn.com/no.svg",
      png: "https://flagcdn.com/w320/no.png",
    },
  },
  {
    name: "Oman",
    country_code: "OM",
    country_code2: "OMN",
    calling_code: "968",
    flags: {
      svg: "https://flagcdn.com/om.svg",
      png: "https://flagcdn.com/w320/om.png",
    },
  },
  {
    name: "Pakistan",
    country_code: "PK",
    country_code2: "PAK",
    calling_code: "92",
    flags: {
      svg: "https://flagcdn.com/pk.svg",
      png: "https://flagcdn.com/w320/pk.png",
    },
  },
  {
    name: "Palau",
    country_code: "PW",
    country_code2: "PLW",
    calling_code: "680",
    flags: {
      svg: "https://flagcdn.com/pw.svg",
      png: "https://flagcdn.com/w320/pw.png",
    },
  },
  {
    name: "Palestine, State of",
    country_code: "PS",
    country_code2: "PSE",
    calling_code: "970",
    flags: {
      svg: "https://flagcdn.com/ps.svg",
      png: "https://flagcdn.com/w320/ps.png",
    },
  },
  {
    name: "Panama",
    country_code: "PA",
    country_code2: "PAN",
    calling_code: "507",
    flags: {
      svg: "https://flagcdn.com/pa.svg",
      png: "https://flagcdn.com/w320/pa.png",
    },
  },
  {
    name: "Papua New Guinea",
    country_code: "PG",
    country_code2: "PNG",
    calling_code: "675",
    flags: {
      svg: "https://flagcdn.com/pg.svg",
      png: "https://flagcdn.com/w320/pg.png",
    },
  },
  {
    name: "Paraguay",
    country_code: "PY",
    country_code2: "PRY",
    calling_code: "595",
    flags: {
      svg: "https://flagcdn.com/py.svg",
      png: "https://flagcdn.com/w320/py.png",
    },
  },
  {
    name: "Peru",
    country_code: "PE",
    country_code2: "PER",
    calling_code: "51",
    flags: {
      svg: "https://flagcdn.com/pe.svg",
      png: "https://flagcdn.com/w320/pe.png",
    },
  },
  {
    name: "Philippines",
    country_code: "PH",
    country_code2: "PHL",
    calling_code: "63",
    flags: {
      svg: "https://flagcdn.com/ph.svg",
      png: "https://flagcdn.com/w320/ph.png",
    },
  },
  {
    name: "Pitcairn",
    country_code: "PN",
    country_code2: "PCN",
    calling_code: "64",
    flags: {
      svg: "https://flagcdn.com/pn.svg",
      png: "https://flagcdn.com/w320/pn.png",
    },
  },
  {
    name: "Poland",
    country_code: "PL",
    country_code2: "POL",
    calling_code: "48",
    flags: {
      svg: "https://flagcdn.com/pl.svg",
      png: "https://flagcdn.com/w320/pl.png",
    },
  },
  {
    name: "Portugal",
    country_code: "PT",
    country_code2: "PRT",
    calling_code: "351",
    flags: {
      svg: "https://flagcdn.com/pt.svg",
      png: "https://flagcdn.com/w320/pt.png",
    },
  },
  {
    name: "Puerto Rico",
    country_code: "PR",
    country_code2: "PRI",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/pr.svg",
      png: "https://flagcdn.com/w320/pr.png",
    },
  },
  {
    name: "Qatar",
    country_code: "QA",
    country_code2: "QAT",
    calling_code: "974",
    flags: {
      svg: "https://flagcdn.com/qa.svg",
      png: "https://flagcdn.com/w320/qa.png",
    },
  },
  {
    name: "Republic of Kosovo",
    country_code: "XK",
    country_code2: "UNK",
    calling_code: "383",
    flags: {
      svg: "https://flagcdn.com/xk.svg",
      png: "https://flagcdn.com/w320/xk.png",
    },
  },
  {
    name: "Réunion",
    country_code: "RE",
    country_code2: "REU",
    calling_code: "262",
    flags: {
      svg: "https://flagcdn.com/re.svg",
      png: "https://flagcdn.com/w320/re.png",
    },
  },
  {
    name: "Romania",
    country_code: "RO",
    country_code2: "ROU",
    calling_code: "40",
    flags: {
      svg: "https://flagcdn.com/ro.svg",
      png: "https://flagcdn.com/w320/ro.png",
    },
  },
  {
    name: "Russian Federation",
    country_code: "RU",
    country_code2: "RUS",
    calling_code: "7",
    flags: {
      svg: "https://flagcdn.com/ru.svg",
      png: "https://flagcdn.com/w320/ru.png",
    },
  },
  {
    name: "Rwanda",
    country_code: "RW",
    country_code2: "RWA",
    calling_code: "250",
    flags: {
      svg: "https://flagcdn.com/rw.svg",
      png: "https://flagcdn.com/w320/rw.png",
    },
  },
  {
    name: "Saint Barthélemy",
    country_code: "BL",
    country_code2: "BLM",
    calling_code: "590",
    flags: {
      svg: "https://flagcdn.com/bl.svg",
      png: "https://flagcdn.com/w320/bl.png",
    },
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    country_code: "SH",
    country_code2: "SHN",
    calling_code: "290",
    flags: {
      svg: "https://flagcdn.com/sh.svg",
      png: "https://flagcdn.com/w320/sh.png",
    },
  },
  {
    name: "Saint Kitts and Nevis",
    country_code: "KN",
    country_code2: "KNA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/kn.svg",
      png: "https://flagcdn.com/w320/kn.png",
    },
  },
  {
    name: "Saint Lucia",
    country_code: "LC",
    country_code2: "LCA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/lc.svg",
      png: "https://flagcdn.com/w320/lc.png",
    },
  },
  {
    name: "Saint Martin (French part)",
    country_code: "MF",
    country_code2: "MAF",
    calling_code: "590",
    flags: {
      svg: "https://flagcdn.com/mf.svg",
      png: "https://flagcdn.com/w320/mf.png",
    },
  },
  {
    name: "Saint Pierre and Miquelon",
    country_code: "PM",
    country_code2: "SPM",
    calling_code: "508",
    flags: {
      svg: "https://flagcdn.com/pm.svg",
      png: "https://flagcdn.com/w320/pm.png",
    },
  },
  {
    name: "Saint Vincent and the Grenadines",
    country_code: "VC",
    country_code2: "VCT",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/vc.svg",
      png: "https://flagcdn.com/w320/vc.png",
    },
  },
  {
    name: "Samoa",
    country_code: "WS",
    country_code2: "WSM",
    calling_code: "685",
    flags: {
      svg: "https://flagcdn.com/ws.svg",
      png: "https://flagcdn.com/w320/ws.png",
    },
  },
  {
    name: "San Marino",
    country_code: "SM",
    country_code2: "SMR",
    calling_code: "378",
    flags: {
      svg: "https://flagcdn.com/sm.svg",
      png: "https://flagcdn.com/w320/sm.png",
    },
  },
  {
    name: "Sao Tome and Principe",
    country_code: "ST",
    country_code2: "STP",
    calling_code: "239",
    flags: {
      svg: "https://flagcdn.com/st.svg",
      png: "https://flagcdn.com/w320/st.png",
    },
  },
  {
    name: "Saudi Arabia",
    country_code: "SA",
    country_code2: "SAU",
    calling_code: "966",
    flags: {
      svg: "https://flagcdn.com/sa.svg",
      png: "https://flagcdn.com/w320/sa.png",
    },
  },
  {
    name: "Senegal",
    country_code: "SN",
    country_code2: "SEN",
    calling_code: "221",
    flags: {
      svg: "https://flagcdn.com/sn.svg",
      png: "https://flagcdn.com/w320/sn.png",
    },
  },
  {
    name: "Serbia",
    country_code: "RS",
    country_code2: "SRB",
    calling_code: "381",
    flags: {
      svg: "https://flagcdn.com/rs.svg",
      png: "https://flagcdn.com/w320/rs.png",
    },
  },
  {
    name: "Seychelles",
    country_code: "SC",
    country_code2: "SYC",
    calling_code: "248",
    flags: {
      svg: "https://flagcdn.com/sc.svg",
      png: "https://flagcdn.com/w320/sc.png",
    },
  },
  {
    name: "Sierra Leone",
    country_code: "SL",
    country_code2: "SLE",
    calling_code: "232",
    flags: {
      svg: "https://flagcdn.com/sl.svg",
      png: "https://flagcdn.com/w320/sl.png",
    },
  },
  {
    name: "Singapore",
    country_code: "SG",
    country_code2: "SGP",
    calling_code: "65",
    flags: {
      svg: "https://flagcdn.com/sg.svg",
      png: "https://flagcdn.com/w320/sg.png",
    },
  },
  {
    name: "Sint Maarten (Dutch part)",
    country_code: "SX",
    country_code2: "SXM",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/sx.svg",
      png: "https://flagcdn.com/w320/sx.png",
    },
  },
  {
    name: "Slovakia",
    country_code: "SK",
    country_code2: "SVK",
    calling_code: "421",
    flags: {
      svg: "https://flagcdn.com/sk.svg",
      png: "https://flagcdn.com/w320/sk.png",
    },
  },
  {
    name: "Slovenia",
    country_code: "SI",
    country_code2: "SVN",
    calling_code: "386",
    flags: {
      svg: "https://flagcdn.com/si.svg",
      png: "https://flagcdn.com/w320/si.png",
    },
  },
  {
    name: "Solomon Islands",
    country_code: "SB",
    country_code2: "SLB",
    calling_code: "677",
    flags: {
      svg: "https://flagcdn.com/sb.svg",
      png: "https://flagcdn.com/w320/sb.png",
    },
  },
  {
    name: "Somalia",
    country_code: "SO",
    country_code2: "SOM",
    calling_code: "252",
    flags: {
      svg: "https://flagcdn.com/so.svg",
      png: "https://flagcdn.com/w320/so.png",
    },
  },
  {
    name: "South Africa",
    country_code: "ZA",
    country_code2: "ZAF",
    calling_code: "27",
    flags: {
      svg: "https://flagcdn.com/za.svg",
      png: "https://flagcdn.com/w320/za.png",
    },
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    country_code: "GS",
    country_code2: "SGS",
    calling_code: "500",
    flags: {
      svg: "https://flagcdn.com/gs.svg",
      png: "https://flagcdn.com/w320/gs.png",
    },
  },
  {
    name: "Korea (Republic of)",
    country_code: "KR",
    country_code2: "KOR",
    calling_code: "82",
    flags: {
      svg: "https://flagcdn.com/kr.svg",
      png: "https://flagcdn.com/w320/kr.png",
    },
  },
  {
    name: "Spain",
    country_code: "ES",
    country_code2: "ESP",
    calling_code: "34",
    flags: {
      svg: "https://flagcdn.com/es.svg",
      png: "https://flagcdn.com/w320/es.png",
    },
  },
  {
    name: "Sri Lanka",
    country_code: "LK",
    country_code2: "LKA",
    calling_code: "94",
    flags: {
      svg: "https://flagcdn.com/lk.svg",
      png: "https://flagcdn.com/w320/lk.png",
    },
  },
  {
    name: "Sudan",
    country_code: "SD",
    country_code2: "SDN",
    calling_code: "249",
    flags: {
      svg: "https://flagcdn.com/sd.svg",
      png: "https://flagcdn.com/w320/sd.png",
    },
  },
  {
    name: "South Sudan",
    country_code: "SS",
    country_code2: "SSD",
    calling_code: "211",
    flags: {
      svg: "https://flagcdn.com/ss.svg",
      png: "https://flagcdn.com/w320/ss.png",
    },
  },
  {
    name: "Suriname",
    country_code: "SR",
    country_code2: "SUR",
    calling_code: "597",
    flags: {
      svg: "https://flagcdn.com/sr.svg",
      png: "https://flagcdn.com/w320/sr.png",
    },
  },
  {
    name: "Svalbard and Jan Mayen",
    country_code: "SJ",
    country_code2: "SJM",
    calling_code: "47",
    flags: {
      svg: "https://flagcdn.com/sj.svg",
      png: "https://flagcdn.com/w320/sj.png",
    },
  },
  {
    name: "Swaziland",
    country_code: "SZ",
    country_code2: "SWZ",
    calling_code: "268",
    flags: {
      svg: "https://flagcdn.com/sz.svg",
      png: "https://flagcdn.com/w320/sz.png",
    },
  },
  {
    name: "Sweden",
    country_code: "SE",
    country_code2: "SWE",
    calling_code: "46",
    flags: {
      svg: "https://flagcdn.com/se.svg",
      png: "https://flagcdn.com/w320/se.png",
    },
  },
  {
    name: "Switzerland",
    country_code: "CH",
    country_code2: "CHE",
    calling_code: "41",
    flags: {
      svg: "https://flagcdn.com/ch.svg",
      png: "https://flagcdn.com/w320/ch.png",
    },
  },
  {
    name: "Syrian Arab Republic",
    country_code: "SY",
    country_code2: "SYR",
    calling_code: "963",
    flags: {
      svg: "https://flagcdn.com/sy.svg",
      png: "https://flagcdn.com/w320/sy.png",
    },
  },
  {
    name: "Taiwan",
    country_code: "TW",
    country_code2: "TWN",
    calling_code: "886",
    flags: {
      svg: "https://flagcdn.com/tw.svg",
      png: "https://flagcdn.com/w320/tw.png",
    },
  },
  {
    name: "Tajikistan",
    country_code: "TJ",
    country_code2: "TJK",
    calling_code: "992",
    flags: {
      svg: "https://flagcdn.com/tj.svg",
      png: "https://flagcdn.com/w320/tj.png",
    },
  },
  {
    name: "Tanzania, United Republic of",
    country_code: "TZ",
    country_code2: "TZA",
    calling_code: "255",
    flags: {
      svg: "https://flagcdn.com/tz.svg",
      png: "https://flagcdn.com/w320/tz.png",
    },
  },
  {
    name: "Thailand",
    country_code: "TH",
    country_code2: "THA",
    calling_code: "66",
    flags: {
      svg: "https://flagcdn.com/th.svg",
      png: "https://flagcdn.com/w320/th.png",
    },
  },
  {
    name: "Timor-Leste",
    country_code: "TL",
    country_code2: "TLS",
    calling_code: "670",
    flags: {
      svg: "https://flagcdn.com/tl.svg",
      png: "https://flagcdn.com/w320/tl.png",
    },
  },
  {
    name: "Togo",
    country_code: "TG",
    country_code2: "TGO",
    calling_code: "228",
    flags: {
      svg: "https://flagcdn.com/tg.svg",
      png: "https://flagcdn.com/w320/tg.png",
    },
  },
  {
    name: "Tokelau",
    country_code: "TK",
    country_code2: "TKL",
    calling_code: "690",
    flags: {
      svg: "https://flagcdn.com/tk.svg",
      png: "https://flagcdn.com/w320/tk.png",
    },
  },
  {
    name: "Tonga",
    country_code: "TO",
    country_code2: "TON",
    calling_code: "676",
    flags: {
      svg: "https://flagcdn.com/to.svg",
      png: "https://flagcdn.com/w320/to.png",
    },
  },
  {
    name: "Trinidad and Tobago",
    country_code: "TT",
    country_code2: "TTO",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/tt.svg",
      png: "https://flagcdn.com/w320/tt.png",
    },
  },
  {
    name: "Tunisia",
    country_code: "TN",
    country_code2: "TUN",
    calling_code: "216",
    flags: {
      svg: "https://flagcdn.com/tn.svg",
      png: "https://flagcdn.com/w320/tn.png",
    },
  },
  {
    name: "Turkey",
    country_code: "TR",
    country_code2: "TUR",
    calling_code: "90",
    flags: {
      svg: "https://flagcdn.com/tr.svg",
      png: "https://flagcdn.com/w320/tr.png",
    },
  },
  {
    name: "Turkmenistan",
    country_code: "TM",
    country_code2: "TKM",
    calling_code: "993",
    flags: {
      svg: "https://flagcdn.com/tm.svg",
      png: "https://flagcdn.com/w320/tm.png",
    },
  },
  {
    name: "Turks and Caicos Islands",
    country_code: "TC",
    country_code2: "TCA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/tc.svg",
      png: "https://flagcdn.com/w320/tc.png",
    },
  },
  {
    name: "Tuvalu",
    country_code: "TV",
    country_code2: "TUV",
    calling_code: "688",
    flags: {
      svg: "https://flagcdn.com/tv.svg",
      png: "https://flagcdn.com/w320/tv.png",
    },
  },
  {
    name: "Uganda",
    country_code: "UG",
    country_code2: "UGA",
    calling_code: "256",
    flags: {
      svg: "https://flagcdn.com/ug.svg",
      png: "https://flagcdn.com/w320/ug.png",
    },
  },
  {
    name: "Ukraine",
    country_code: "UA",
    country_code2: "UKR",
    calling_code: "380",
    flags: {
      svg: "https://flagcdn.com/ua.svg",
      png: "https://flagcdn.com/w320/ua.png",
    },
  },
  {
    name: "United Arab Emirates",
    country_code: "AE",
    country_code2: "ARE",
    calling_code: "971",
    flags: {
      svg: "https://flagcdn.com/ae.svg",
      png: "https://flagcdn.com/w320/ae.png",
    },
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    country_code: "GB",
    country_code2: "GBR",
    calling_code: "44",
    flags: {
      svg: "https://flagcdn.com/gb.svg",
      png: "https://flagcdn.com/w320/gb.png",
    },
  },
  {
    name: "United States of America",
    country_code: "US",
    country_code2: "USA",
    calling_code: "1",
    flags: {
      svg: "https://flagcdn.com/us.svg",
      png: "https://flagcdn.com/w320/us.png",
    },
  },
  {
    name: "Uruguay",
    country_code: "UY",
    country_code2: "URY",
    calling_code: "598",
    flags: {
      svg: "https://flagcdn.com/uy.svg",
      png: "https://flagcdn.com/w320/uy.png",
    },
  },
  {
    name: "Uzbekistan",
    country_code: "UZ",
    country_code2: "UZB",
    calling_code: "998",
    flags: {
      svg: "https://flagcdn.com/uz.svg",
      png: "https://flagcdn.com/w320/uz.png",
    },
  },
  {
    name: "Vanuatu",
    country_code: "VU",
    country_code2: "VUT",
    calling_code: "678",
    flags: {
      svg: "https://flagcdn.com/vu.svg",
      png: "https://flagcdn.com/w320/vu.png",
    },
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    country_code: "VE",
    country_code2: "VEN",
    calling_code: "58",
    flags: {
      svg: "https://flagcdn.com/ve.svg",
      png: "https://flagcdn.com/w320/ve.png",
    },
  },
  {
    name: "Vietnam",
    country_code: "VN",
    country_code2: "VNM",
    calling_code: "84",
    flags: {
      svg: "https://flagcdn.com/vn.svg",
      png: "https://flagcdn.com/w320/vn.png",
    },
  },
  {
    name: "Wallis and Futuna",
    country_code: "WF",
    country_code2: "WLF",
    calling_code: "681",
    flags: {
      svg: "https://flagcdn.com/wf.svg",
      png: "https://flagcdn.com/w320/wf.png",
    },
  },
  {
    name: "Western Sahara",
    country_code: "EH",
    country_code2: "ESH",
    calling_code: "212",
    flags: {
      svg: "https://flagcdn.com/eh.svg",
      png: "https://flagcdn.com/w320/eh.png",
    },
  },
  {
    name: "Yemen",
    country_code: "YE",
    country_code2: "YEM",
    calling_code: "967",
    flags: {
      svg: "https://flagcdn.com/ye.svg",
      png: "https://flagcdn.com/w320/ye.png",
    },
  },
  {
    name: "Zambia",
    country_code: "ZM",
    country_code2: "ZMB",
    calling_code: "260",
    flags: {
      svg: "https://flagcdn.com/zm.svg",
      png: "https://flagcdn.com/w320/zm.png",
    },
  },
  {
    name: "Zimbabwe",
    country_code: "ZW",
    country_code2: "ZWE",
    calling_code: "263",
    flags: {
      svg: "https://flagcdn.com/zw.svg",
      png: "https://flagcdn.com/w320/zw.png",
    },
  },
];
export default countries;
