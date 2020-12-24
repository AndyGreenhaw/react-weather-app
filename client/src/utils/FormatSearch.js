export default {

    getURL: function (searchInput){
        console.log(searchInput)

        let ajaxRequest;
        let apiURLObject;
        
    if (!isNaN(searchInput)) {

        apiURLObject = formatZIPs(searchInput)
        return apiURLObject

    } else if (searchInput.indexOf(',') > -1) {

            let ajaxCity = (searchInput.split(','))[0]
            let ajaxState = ((searchInput.split(','))[1]).toLowerCase().trim()
    
            console.log(ajaxCity + "," + ajaxState)
            console.log(ajaxState)
    
            switch(ajaxState){
                case "al":
                    ajaxRequest = ajaxCity + ",01,840";
                    apiURLObject = formatURLs(ajaxRequest)
                    break;
                case "ak":
                    ajaxRequest = ajaxCity + ",02,840";
                    apiURLObject = formatURLs(ajaxRequest)
                    break;
                case "as":
                    ajaxRequest = ajaxCity + ",03,840";
                    break;
                case "az":
                    ajaxRequest = ajaxCity + ",04,840";
                    break;
                case "ar":
                    ajaxRequest = ajaxCity + ",05,840";
                    break;
                case "bi":
                    ajaxRequest = ajaxCity + ",81,840";
                    break;
                case "ca":
                    ajaxRequest = ajaxCity + ",06,840";
                    break;
                case "co":
                    ajaxRequest = ajaxCity + ",08,840";
                                       
                case "ct":
                    ajaxRequest = ajaxCity + ",09,840";
                    break;
                case "de":
                    ajaxRequest = ajaxCity + ",10,840";
                    break;
                case "dc":
                    ajaxRequest = ajaxCity + ",11,840";
                    break;
                case "fl":
                    ajaxRequest = ajaxCity + ",12,840";
                    break;
                case "ga":
                    ajaxRequest = ajaxCity + ",13,840";
                    break;
                case "hi":
                    ajaxRequest = ajaxCity + ",15,840";
                    break;
                case "id":
                    ajaxRequest = ajaxCity + ",16,840";
                    break;
                case "il":
                    ajaxRequest = ajaxCity + ",17,840";
                    break;
                case "in":
                    ajaxRequest = ajaxCity + ",18,840";
                    break;
                case "ia":
                    ajaxRequest = ajaxCity + ",19,840";
                    break;
                case "ks":
                    ajaxRequest = (ajaxCity + ",20,840");
                    break;
                case "ky":
                    ajaxRequest = ajaxCity + ",21,840";
                    break;
                case "la":
                    ajaxRequest = ajaxCity + ",22,840";
                    break;
                case "me":
                    ajaxRequest = ajaxCity + ",23,840";
                    break;
                case "md":
                    ajaxRequest = ajaxCity + ",24,840";
                    break;
                case "ma":
                    ajaxRequest = ajaxCity + ",25,840";
                    break;
                case "mi":
                    ajaxRequest = ajaxCity + ",26,840";
                    break;
                case "mn":
                    ajaxRequest = ajaxCity + ",27,840";
                    break;
                case "ms":
                    ajaxRequest = ajaxCity + ",28,840";
                    break;
                case "mo":
                    ajaxRequest = ajaxCity + ",29,840";
                    break;
                case "mt":
                    ajaxRequest = ajaxCity + ",30,840";
                    break;
                case "ne":
                    ajaxRequest = ajaxCity + ",31,840";
                    break;
                case "nv":
                    ajaxRequest = ajaxCity + ",32,840";
                    break;
                case "nh":
                    ajaxRequest = ajaxCity + ",33,840";
                    break;
                case "nj":
                    ajaxRequest = ajaxCity + ",34,840";
                    break;
                case "nm":
                    ajaxRequest = ajaxCity + ",35,840";
                    break;
                case "ny":
                    ajaxRequest = ajaxCity + ",36,840";
                    break;
                case "nc":
                    ajaxRequest = ajaxCity + ",37,840";
                    break;
                case "nd":
                    ajaxRequest = ajaxCity + ",38,840";
                    break;
                case "oh":
                    ajaxRequest = ajaxCity + ",39,840";
                    break;
                case "ok":
                    ajaxRequest = ajaxCity + ",40,840";
                    break;
                case "or":
                    ajaxRequest = ajaxCity + ",41,840";
                    break;
                case "pa":
                    ajaxRequest = ajaxCity + ",42,840";
                    break;
                case "pr":
                    ajaxRequest = ajaxCity + ",72,840";
                    break;
                case "ri":
                    ajaxRequest = ajaxCity + ",44,840";
                    break;
                case "sc":
                    ajaxRequest = ajaxCity + ",45,840";
                    break;
                case "sd":
                    ajaxRequest = ajaxCity + ",46,840";
                    break;
                case "tn":
                    ajaxRequest = ajaxCity + ",47,840";
                    break;
                case "tx":
                    ajaxRequest = ajaxCity + ",48,840";
                    break;
                case "ut":
                    ajaxRequest = ajaxCity + ",49,840";
                    break;
                case "vt":
                    ajaxRequest = ajaxCity + ",50,840";
                case "va":
                    ajaxRequest = ajaxCity + ",51,840";
                    break;
                case "vi":
                    ajaxRequest = ajaxCity + ",78,840";
                    break;
                case "wa":
                    ajaxRequest = ajaxCity + ",53,840";
                    break;
                case "wv":
                    ajaxRequest = ajaxCity + ",54,840";
                    break;
                case "wi":
                    ajaxRequest = ajaxCity + ",55,840";
                    break;
                case "wy":
                    ajaxRequest = ajaxCity + ",56,840";
            }

            apiURLObject = formatURLs(ajaxRequest) 
            return apiURLObject

        } else {
            apiURLObject = formatURLs(searchInput)
            return apiURLObject
        }

        // FORMATTING URLS FOR CITY ENTRIES
        function formatURLs(ajaxRequest){

            console.log(ajaxRequest)
            // PRIMARY URL
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
                + ajaxRequest 
                + "&units=imperial" 
                + "&appid=e7d65f8500681df1e3559a6964e703f1"; 

            // FORECAST URL
            const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q="
                + ajaxRequest 
                + "&units=imperial" 
                + "&appid=e7d65f8500681df1e3559a6964e703f1"; 

            const builtObject = {
                URL_Today: queryURL,
                URL_Forecast: forecastURL,
            }

            return builtObject

        }

        // FORMATTING URLS FOR ZIP CODE ENTRIES
        function formatZIPs(ajaxRequest){

            // PRIMARY URL
            const queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="
                + ajaxRequest 
                + "&units=imperial" 
                + "&appid=e7d65f8500681df1e3559a6964e703f1"; 

            // FORECAST URL
            const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?zip="
                + ajaxRequest 
                + "&units=imperial" 
                + "&appid=e7d65f8500681df1e3559a6964e703f1"; 

            const builtObject = {
                URL_Today: queryURL,
                URL_Forecast: forecastURL,
        }

        return builtObject
        }
    }

}