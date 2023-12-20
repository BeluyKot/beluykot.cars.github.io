let header_mv = new Vue({
    el: "header",
    data: {},
    methods: {}
})

let main_mv = new Vue({
    el: "main",
    data: {
        counter: 0,
        search1: "",
        search2: "",
        search3: "",
        search4: "",
        menu: ["Марки", "Характеристики", "Отзывы", "Форум", "FAQ"],
        allBrands: [
            "Все марки",
            "Acura",
            "Alfa Romeo",
            "Aston Martin",
            "Audi",
            "Bentley",
            "Bmw",
            "Bugatti",
            "Buick",
            "Cadillac",
            "Chery",
            "Chevrolet",
            "Chrysler",
            "Citroen",
            "Dacia",
            "Daewoo",
            "DAF",
            "Daihatsu",
            "Datsun",
            "Dodge",
            "DS",
            "Ferrari",
            "Fiat",
            "Fisker",
            "Ford",
            "Geely",
            "Genesis",
            "GMC",
            "Honda",
            "Hummer",
            "Hyundai",
            "Infinity",
            "Isuzu",
            "Iveco",
            "Jaguar",
            "Jeep",
            "Kia",
            "Koenigsegg",
            "Lamborghini",
            "Lancia",
            "Land Rover",
            "Lexus",
            "Lincoln",
            "Lotus",
            "Maserati",
            "Mazda",
            "Mercedes-Benz",
            "Mercury",
            "MG",
            "Mini",
            "Mitsubishi",
            "Nissan",
            "Opel",
            "Peugeot",
            "Piaggio",
            "Pontiac",
            "Porsche",
            "Proton",
            "Ravon",
            "Renault",
            "Roewe",
            "Rolls-Royce",
            "Rover",
            "Saab",
            "Saturn",
            "Scania",
            "Scion",
            "Seat",
            "Skoda",
            "Smart",
            "SRT",
            "SsangYong",
            "Subaru",
            "Suzuki",
            "Tata",
            "Tesla",
            "Toyota",
            "Volkswagen",
            "Volvo",],
        brand: '',
        model: '',
        perform: '',
        brandId: false,
        popularModels: ["Audi",
            "Alfa Romeo",
            "Bentley",
            "Bmw",
            "Bugatti",
            "Chevrolet",
            "Chrysler",
            "Cadillac",
            "Dodge",
            "Datsun",
            "DAF",
            "Ford",
            "Honda",
            "Hyundai",
            "Infinity",
            "Isuzu",
            "Iveco",
            "Jaguar",
            "Jeep",
            "Kia",
            "Koenigsegg",
            "Lamborghini",
            "Land Rover",
            "Lexus",
            "Lotus",
            "Maserati",
            "Mazda",
            "Mercedes-Benz",
            "Mini",
            "Mitsubishi",
            "Nissan",
            "Opel",
            "Peugeot",
            "Porsche",
            "Renault",
            "Rolls-Royce",
            "Skoda",
            "Saab",
            "Seat",
            "Suzuki",
            "Subaru",
            "Tesla",
            "Toyota",
            "Volkswagen",],
        modelObj: [],
        models: {
            'Acura': [
                "Все модели",
                "CL",
                "EX",
                "ILX",
                "Integra",
                "Legend",
                "MDX",
                "NSX",
                "RDX",
                "RL",
                "RSX",
                "SLX",
                "TL",
                "TLX",
                "TSX",
                "Vigor",
                "ZDX"
            ],
            'Alfa Romeo': [
                "Все модели",
                "145",
                "146",
                "147",
                "155",
                "156",
                "159",
                "164",
                "166",
                "33",
                "4C",
                "75",
                "90",
                "Alfetta",
                "Brera",
                "Giulia",
                "Giulietta",
                "GT",
                "GTV",
                "MiTo",
                "Spider",
                "Sprint",
                "Stelvio"
            ],
            'Aston Martin': [
                "Все модели",
                "Cygnet",
                "DB11",
                "DB6",
                "DB7",
                "DB7 Zagato",
                "DB9",
                "DBS",
                "DBX",
                "Lagonda",
                "Rapide",
                "V12 Vantage",
                "V8",
                "V8 Vantage",
                "V8 Zagato",
                "Vanquish",
                "Virage"
            ],
            'Audi': [
                "Все модели",
                "100",
                "200",
                "50",
                "80",
                "90",
                "A1",
                "A2",
                "A3",
                "A4",
                "A5",
                "A6",
                "A7",
                "A8",
                "Allroad",
                "Cabriolet",
                "Coupe",
                "E-tron",
                "Le Mans",
                "Pikes Peak",
                "Q2",
                "Q3",
                "Q5",
                "Q7",
                "Q8",
                "Quattro",
                "R8",
                "RS Q3",
                "RS2",
                "RS3",
                "RS4",
                "RS5",
                "RS6",
                "RS7",
                "S1",
                "S2",
                "S3",
                "S4",
                "S5",
                "S6",
                "S7",
                "S8",
                "SQ2",
                "SQ5",
                "SQ7",
                "SQ8",
                "TT",
                "V8"
            ],
            'Bentley': [
                "Все модели",
                "Arnage",
                "Azure",
                "Bentayga",
                "Brooklands",
                "Continental",
                "Continental Flying Spur",
                "Continental GT",
                "Continental GTS",
                "Flying Spur",
                "Mulsanne"
            ],
            'Bmw': [
                "Все модели",
                "1-серия",
                "2-серия",
                "3-серия",
                "4-серия",
                "5-серия",
                "6-серия",
                "7-серия",
                "8-серия",
                "Gran Turismo",
                "i3",
                "i8",
                "M Coupe",
                "M Roadster",
                "M1",
                "M2",
                "M3",
                "M4",
                "M5",
                "M6",
                "X1",
                "X2",
                "X3",
                "X4",
                "X5",
                "X6",
                "X7",
                "Z1",
                "Z2",
                "Z3",
                "Z4",
                "Z8"
            ],
            'Bugatti': [
                "Все модели",
                "Chiron",
                "EB 110",
                "EB 112",
                "Veyron"
            ],
            'Buick': [
                "Все модели",
                "Centure",
                "Enclave",
                "Le Sabre",
                "Park Avenue",
                "Rainier",
                "Reatta",
                "Regal",
                "Rendezvous",
                "Riviera",
                "Roadmaster",
                "Skulark"
            ],
            'Cadillac': [
                "Все модели",
                "Allante",
                "ATS",
                "BLS",
                "Brougham",
                "CT6",
                "CTS",
                "CTS-V",
                "De Ville",
                "Eldorado",
                "Escalade",
                "Fleetwood",
                "Seville",
                "SRX",
                "STS",
                "XLR",
                "XT4",
                "XT5",
                "XT6",
                "XTS"
            ],
            'Chery': [
                "Все модели",
                "Amulet",
                "Arrizo 7",
                "Bonus (A13)",
                "Bonus 3 (A19)",
                "CrossEastar (B14)",
                "Fora",
                "IndiS",
                "Kimo",
                "M11 (A3)",
                "Mikado",
                "Oriental Son",
                "QQ6",
                "Sweet",
                "Tiggo",
                "Tiggo 2",
                "Tiggo 3",
                "Tiggo 4",
                "Tiggo 7",
                "Tiggo 8",
                "Very"
            ],
            'Chevrolet': [
                "Все модели",
                "Alero",
                "Astro",
                "Avalanche",
                "Aveo",
                "Beretta",
                "Blazer",
                "Bolt",
                "Camaro",
                "Caprice",
                "Captiva",
                "Cavalier",
                "Celta",
                "Cobalt",
                "Colorado",
                "Corsa",
                "Corsica",
                "Corvette",
                "Cruze",
                "Epica",
                "Eqinox",
                "Evanda",
                "Express",
                "Geo Storm",
                "HHR",
                "Impala",
                "Ipanema",
                "Kalos",
                "Lacetti",
                "Lanos",
                "Lumina",
                "Malibu",
                "Matiz",
                "Metro",
                "Monte Carlo",
                "Monza",
                "Niva (2123)",
                "Nubira",
                "Omega",
                "Orlando",
                "Prizm",
                "Rezzo",
                "S-10",
                "Silverado",
                "Spark",
                "SSR",
                "Suburban",
                "Tacuma",
                "Tahoe",
                "Tracker",
                "Traiblazer",
                "Trax",
                "Uplander",
                "Vectra",
                "Venture",
                "Viva",
                "Volt"
            ],
            'Chrysler': [
                "Все модели",
                "200",
                "300C",
                "300M",
                "Cirrus",
                "Concorde",
                "Crossfire",
                "Daytona",
                "ES",
                "Grand Voyage",
                "GS",
                "GTS",
                "Intrepid",
                "Le Baron",
                "LHS",
                "Neon",
                "New Yorker",
                "Pacifica",
                "Prowler",
                "PT Cruiser",
                "Saratoga",
                "Sebring",
                "Stratus",
                "Town & Country",
                "Viper",
                "Vision",
                "Voyage"
            ],
            'Citroen': [
                "Все модели",
                "2CV",
                "AX",
                "Axel",
                "Berlingo",
                "BX",
                "C-Crosser",
                "C-Elysee",
                "C-Zero",
                "C1",
                "C2",
                "C3",
                "C3 Aircross",
                "C3 Picasso",
                "C3 Pluriel",
                "C4",
                "C4 Aircross",
                "C4 Cactus",
                "C4 Grand Picasso",
                "C4 Picasso",
                "C4 SpaceTourer",
                "C5",
                "C5 Aircross",
                "C6",
                "C8",
                "CX",
                "DS3",
                "DS4",
                "DS5",
                "Dyane",
                "Evasion",
                "GSA",
                "Jumpy",
                "LNA",
                "Nemo",
                "Saxo",
                "SpaceTourer",
                "Visa",
                "Xantia",
                "XM",
                "Xsara",
                "Xsara Picasso",
                "ZX"
            ],
            'Dacia': [
                "Все модели",
                "Dokker",
                "Duster",
                "Lodgy",
                "Logan",
                "Logan MCV",
                "Sandero",
                "Solenza",
            ],
            'Daewoo': [
                "Все модели",
                "Arcadia",
                "Brougham",
                "Charman",
                "Espero",
                "Evanda",
                "Gentra",
                "Istana",
                "Kalos",
                "korando",
                "Lacetti",
                "Lanos",
                "Legazda",
                "Lublin",
                "Magnus",
                "Matiz",
                "Musso",
                "Nexia",
                "Nubira",
                "Polonez",
                "Prince",
                "Racer",
                "Rezzo",
                "Tacuma",
                "Tico",
                "Winstorm"
            ],
            'DAF': [
                "Все модели",
                "33",
                "600",
                "66",
                "Daffodil",
                "2600",
                "45",
                "55",
                "85",
                "95",
                "CF",
                "LF",
                "Pony",
                "XF"
            ],
            'Daihatsu': [
                "Все модели",
                "Altis",
                "Applause",
                "Atrai",
                "Be-go",
                "Boon",
                "Charage",
                "Charmant",
                "Copen",
                "Cuore",
                "Feroza",
                "Gran Move",
                "Leeza",
                "Materia",
                "Max",
                "Mira",
                "Move",
                "Naked",
                "Opti",
                "Rocky",
                "Rocky Hard Top",
                "Rocky Soft Top",
                "Rocky Wagon",
                "Sirion",
                "Storia",
                "Terios",
                "YRV"
            ],
            'Datsun': [
                "Все модели",
                "mi-DO",
                "on-DO"
            ],
            'Dodge': [
                "Все модели",
                "Avanger",
                "Caliber",
                "Caravan",
                "Challenger",
                "Charger",
                "Dakota",
                "Durango",
                "Grand Caravan",
                "Intrepid",
                "Journey",
                "Magnum",
                "Neon",
                "Nitro",
                "Ram 1500",
                "Ram 2500",
                "Ram 3500",
                "Spirit",
                "Stealth",
                "Stratus",
                "Stratus Coupe",
                "Viper"
            ],
            'DS': [
                "Все модели",
                "DS 3",
                "DS 4",
                "DS 4 Crossback",
                "DS 5",
                "DS 7 Crossback"
            ],
            'Ferrari': [
                "Все модели",
                "212",
                "250",
                "275",
                "308",
                "348",
                "360 Modena",
                "360 Spider",
                "400",
                "456",
                "456 GT",
                "458",
                "488",
                "512 TR",
                "550 Barchetta",
                "550 Maranello",
                "575 M Maranello",
                "599",
                "612 Scaglietti",
                "812 Superfast",
                "California",
                "Enzo",
                "F 355",
                "F 355 Berlinetta",
                "F 355 GTS",
                "F 355 Spider",
                "F 430",
                "F 430 Spider",
                "F 50",
                "F 512",
                "F12 Berlinetta",
                "F550 Barchetta",
                "FF",
                "GTC4",
                "Portofino",
                "Testarossa"
            ],
            'Fiat': [
                "Все модели",
                "124 Spider",
                "126",
                "127",
                "131",
                "132",
                "500",
                "500X",
                "600",
                "900",
                "Albea",
                "Argenta",
                "Barchetta",
                "Brava",
                "Bravo",
                "Cinquecento",
                "Coupe",
                "Croma",
                "Doblo",
                "Doblt",
                "Ducato",
                "Freemont",
                "Fullback",
                "Grande Punto",
                "Idea",
                "Linea",
                "Marea",
                "Multipla",
                "Palio",
                "Panda",
                "Punto",
                "Punto Evo",
                "Qubo",
                "Regata",
                "Ritmo",
                "Scudo",
                "Sedici",
                "Siecento",
                "Siena",
                "Spazio",
                "Stilo",
                "Strada",
                "Tempra",
                "Tipo",
                "Ulysse",
                "Uno",
                "X1/9"
            ],
            'Fisker': [
                "Все модели",
                "Karma",
                "Latigo CS",
                "Tramonto"
            ],
            'Ford': [
                "Все модели",
                "Aerostar",
                "Aspire",
                "B-Max",
                "Bronco",
                "C-Max",
                "Capri",
                "Contour",
                "Cougar",
                "Crown Victoria",
                "Econoline",
                "EcoSport",
                "Edge",
                "Escape",
                "Escort",
                "Excursion",
                "Expedition",
                "Explorer",
                "Explorer Sport",
                "F-150",
                "F-250",
                "F-350",
                "Fiesta",
                "Focus",
                "Focus Coupe-Cabriolet>",
                "Freestar",
                "Freestyle",
                "Fusion",
                "Galaxy",
                "Granada",
                "Grand C-Max",
                "Ikon",
                "Ka",
                "Kuga",
                "Maverick",
                "Mondeo",
                "Mustang",
                "Orion",
                "Probe",
                "Puma",
                "Ranger",
                "S-Max",
                "Scorpio",
                "Shelby GT 500",
                "Sierra",
                "Taunus",
                "Taurus",
                "Thunderbird",
                "Tourneo Connect",
                "Transit",
                "Windstar"
            ],
            'Geely': [
                "Все модели",
                "MK",
                "Atlas",
                "Emgrand",
                "Emgrand GT",
                "Emgrand X7 (GX 7)",
                "GC6",
                "GX 7",
                "MK Cross",
                "Otaka",
                "Tugella",
                "Vision (FC)"
            ],
            'Genesis': [
                "Все модели",
                "G70",
                "G80",
                "G90"
            ],
        },
        performance: {
            'CL': ["CL 1997-2003"],
        },
        closeAllDropDown: true,
        showDropDown1: false,
        showDropDown2: false,
        showDropDown3: false,
        showDropDown4: false,
        dropValue1: 'Характеристики',
        dropValue2: 'Марка',
        dropValue3: 'Модель',
        dropValue4: 'Модификация',
        numberOfBackground: ''
    },
    mounted() {
        document.addEventListener("click", (e) => {
            let className = e.path[0].className
            let customSelectFlag = false
            if (className.search('custom_select_cont') !== -1) {
                customSelectFlag = true
            }
            if (!(className === "fas fa-chevron-down" || customSelectFlag)) {
                this.$root.$emit('close-all')
            }
        })
        let ids = this.generateIds(this.allBrands.length)
        let brand = {}
        for (let i = 0; i < this.allBrands.length; i++) {
            brand[ids [i]] = this.allBrands[i]
        }
        this.brand = brand
        this.numberOfBackground = this.getValue()
        this.changeBackground()
        this.saveNewValue(this.numberOfBackground)
    },
    methods: {
        showDropDown(numberDropDown) {
            let dropDown = 'showDropDown' + numberDropDown
            if (this[dropDown] === false) {
                this.closeAllDropDowns()
            }
            this[dropDown] = !this[dropDown]
            if (this[dropDown] === true) {
                this.$nextTick(() => {
                    this.setDropDownOverflowY()
                })
            }


        },

        setDropDownOverflowY() {
            let dropDowns = document.querySelectorAll('.drop-down-item-cont')
            if (dropDowns[0].offsetHeight < 200) {
                dropDowns[0].style.overflowY = 'hidden'
            }
        },
        closeAllDropDownsMethod() {
            this.showDropDown1 = false
            this.showDropDown2 = false
            this.showDropDown3 = false
            this.showDropDown4 = false
        },
        setSelectedItem(value, numberDropDown, id = this.brandId) {
            let dropValue = 'dropValue' + numberDropDown
            this[dropValue] = value
            this.setBrandId(id)
            console.log(this.brandId)
        },

        sortBySearch(subject, searchText) {
            const regex = new RegExp(searchText, 'i');
            let result = subject.search(regex)
            if (result >= 0) {
                return true
            }
            return false
        },
        generateIds(count) {
            if (count > 676) {
                count = 0
            }
            let alphabet = "abcdefghijklmnopqrstuvwxyz"
            let i = 0
            let j = 0
            let n = -1
            let ids = []
            while (i < count) {
                let id
                if (n === -1) {
                    id = alphabet[j]
                } else {
                    id = alphabet[n] + alphabet[j]
                }
                ids.push(id)
                j++
                if (j > 25) {
                    j = 0
                    n++
                }
                i++
            }
            return ids
        },
        setBrandId(id) {
            this.brandId = id
        },
        saveNewValue(oldVal) {
            let newVal = parseInt(oldVal) + 1
            if (newVal >= 7) {
                newVal = 0
            }
            document.cookie = "value=" + newVal
        },
        getValue() {
            let val = document.cookie
            val = val.split('=')
            val = val[1]
            if (isNaN(val)) {
                val = 0
            }
            return val
        },
        changeBackground() {
            let number = this.numberOfBackground
            console.log(this.numberOfBackground)
            document.querySelector(".back").style.backgroundImage=`url("/img/${number}.jpeg")`
        },
    }
})
window.addEventListener('load', function() {
    var images = [
      'E:/car performance/img/1.jpeg',
      'E:/car performance/img/2.jpeg',
      'E:/car performance/img/3.jpeg',
      'E:/car performance/img/4.jpeg',
      'E:/car performance/img/5.jpeg',
      'E:/car performance/img/6.jpeg',
      'E:/car performance/img/7.jpeg',
      'E:/car performance/img/8.jpeg',
      'E:/car performance/img/9.jpeg',
      'E:/car performance/img/10.jpeg'
    ];
  
    var usedIndexes = [];
  
    function getRandomImage() {
      if (usedIndexes.length === images.length) {
        usedIndexes = [];
      }
  
      var randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (usedIndexes.includes(randomIndex));
  
      usedIndexes.push(randomIndex);
  
      return images[randomIndex];
    }
  
    var randomImage = getRandomImage();
  
    var mainElement = document.querySelector('main');
    mainElement.style.backgroundImage = 'url("' + randomImage + '")';
  });