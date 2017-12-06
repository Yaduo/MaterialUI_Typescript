
export const generateGoogleMapLocationUrl = (googleApiKey: string, loacation: string) => 
    "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(loacation) + "&key=" + encodeURIComponent(googleApiKey);