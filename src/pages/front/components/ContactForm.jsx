import React, { useState } from "react";
const countryCodes = [
  { value: "+91", label: "India", iso: "IN" },
  { "value": "+93", "label": "Afghanistan", "iso": "AF" },
  { "value": "+355", "label": "Albania", "iso": "AL" },
  { "value": "+213", "label": "Algeria", "iso": "DZ" },
  { "value": "+1-684", "label": "American Samoa", "iso": "AS" },
  { "value": "+376", "label": "Andorra", "iso": "AD" },
  { "value": "+244", "label": "Angola", "iso": "AO" },
  { "value": "+1-264", "label": "Anguilla", "iso": "AI" },
  { "value": "+672", "label": "Antarctica", "iso": "AQ" },
  { "value": "+1-268", "label": "Antigua and Barbuda", "iso": "AG" },
  { "value": "+54", "label": "Argentina", "iso": "AR" },
  { "value": "+374", "label": "Armenia", "iso": "AM" },
  { "value": "+297", "label": "Aruba", "iso": "AW" },
  { "value": "+61", "label": "Australia", "iso": "AU" },
  { "value": "+43", "label": "Austria", "iso": "AT" },
  { "value": "+994", "label": "Azerbaijan", "iso": "AZ" },
  { "value": "+1-242", "label": "Bahamas", "iso": "BS" },
  { "value": "+973", "label": "Bahrain", "iso": "BH" },
  { "value": "+880", "label": "Bangladesh", "iso": "BD" },
  { "value": "+1-246", "label": "Barbados", "iso": "BB" },
  { "value": "+375", "label": "Belarus", "iso": "BY" },
  { "value": "+32", "label": "Belgium", "iso": "BE" },
  { "value": "+501", "label": "Belize", "iso": "BZ" },
  { "value": "+229", "label": "Benin", "iso": "BJ" },
  { "value": "+1-441", "label": "Bermuda", "iso": "BM" },
  { "value": "+975", "label": "Bhutan", "iso": "BT" },
  { "value": "+591", "label": "Bolivia", "iso": "BO" },
  { "value": "+387", "label": "Bosnia and Herzegovina", "iso": "BA" },
  { "value": "+267", "label": "Botswana", "iso": "BW" },
  { "value": "+55", "label": "Brazil", "iso": "BR" },
  { "value": "+246", "label": "British Indian Ocean Territory", "iso": "IO" },
  { "value": "+1-284", "label": "British Virgin Islands", "iso": "VG" },
  { "value": "+673", "label": "Brunei", "iso": "BN" },
  { "value": "+359", "label": "Bulgaria", "iso": "BG" },
  { "value": "+226", "label": "Burkina Faso", "iso": "BF" },
  { "value": "+257", "label": "Burundi", "iso": "BI" },
  { "value": "+855", "label": "Cambodia", "iso": "KH" },
  { "value": "+237", "label": "Cameroon", "iso": "CM" },
  { "value": "+1", "label": "Canada", "iso": "CA" },
  { "value": "+238", "label": "Cape Verde", "iso": "CV" },
  { "value": "+1-345", "label": "Cayman Islands", "iso": "KY" },
  { "value": "+236", "label": "Central African Republic", "iso": "CF" },
  { "value": "+235", "label": "Chad", "iso": "TD" },
  { "value": "+56", "label": "Chile", "iso": "CL" },
  { "value": "+86", "label": "China", "iso": "CN" },
  { "value": "+61", "label": "Christmas Island", "iso": "CX" },
  { "value": "+61", "label": "Cocos Islands", "iso": "CC" },
  { "value": "+57", "label": "Colombia", "iso": "CO" },
  { "value": "+269", "label": "Comoros", "iso": "KM" },
  { "value": "+682", "label": "Cook Islands", "iso": "CK" },
  { "value": "+506", "label": "Costa Rica", "iso": "CR" },
  { "value": "+385", "label": "Croatia", "iso": "HR" },
  { "value": "+53", "label": "Cuba", "iso": "CU" },
  { "value": "+599", "label": "Curacao", "iso": "CW" },
  { "value": "+357", "label": "Cyprus", "iso": "CY" },
  { "value": "+420", "label": "Czech Republic", "iso": "CZ" },
  { "value": "+243", "label": "Democratic Republic of the Congo", "iso": "CD" },
  { "value": "+45", "label": "Denmark", "iso": "DK" },
  { "value": "+253", "label": "Djibouti", "iso": "DJ" },
  { "value": "+1-767", "label": "Dominica", "iso": "DM" },
  { "value": "+1-809, +1-829, +1-849", "label": "Dominican Republic", "iso": "DO" },
  { "value": "+670", "label": "East Timor", "iso": "TL" },
  { "value": "+593", "label": "Ecuador", "iso": "EC" },
  { "value": "+20", "label": "Egypt", "iso": "EG" },
  { "value": "+503", "label": "El Salvador", "iso": "SV" },
  { "value": "+240", "label": "Equatorial Guinea", "iso": "GQ" },
  { "value": "+291", "label": "Eritrea", "iso": "ER" },
  { "value": "+372", "label": "Estonia", "iso": "EE" },
  { "value": "+251", "label": "Ethiopia", "iso": "ET" },
  { "value": "+500", "label": "Falkland Islands", "iso": "FK" },
  { "value": "+298", "label": "Faroe Islands", "iso": "FO" },
  { "value": "+679", "label": "Fiji", "iso": "FJ" },
  { "value": "+358", "label": "Finland", "iso": "FI" },
 { "value": "+33", "label": "France", "iso": "FR" },
  { "value": "+689", "label": "French Polynesia", "iso": "PF" },
  { "value": "+241", "label": "Gabon", "iso": "GA" },
  { "value": "+220", "label": "Gambia", "iso": "GM" },
  { "value": "+995", "label": "Georgia", "iso": "GE" },
  { "value": "+49", "label": "Germany", "iso": "DE" },
  { "value": "+233", "label": "Ghana", "iso": "GH" },
  { "value": "+350", "label": "Gibraltar", "iso": "GI" },
  { "value": "+30", "label": "Greece", "iso": "GR" },
  { "value": "+299", "label": "Greenland", "iso": "GL" },
  { "value": "+1-473", "label": "Grenada", "iso": "GD" },
  { "value": "+1-671", "label": "Guam", "iso": "GU" },
  { "value": "+502", "label": "Guatemala", "iso": "GT" },
  { "value": "+44-1481", "label": "Guernsey", "iso": "GG" },
  { "value": "+224", "label": "Guinea", "iso": "GN" },
  { "value": "+245", "label": "Guinea-Bissau", "iso": "GW" },
  { "value": "+592", "label": "Guyana", "iso": "GY" },
  { "value": "+509", "label": "Haiti", "iso": "HT" },
  { "value": "+504", "label": "Honduras", "iso": "HN" },
  { "value": "+852", "label": "Hong Kong", "iso": "HK" },
  { "value": "+36", "label": "Hungary", "iso": "HU" },
  { "value": "+354", "label": "Iceland", "iso": "IS" },
  { "value": "+91", "label": "India", "iso": "IN" },
  { "value": "+62", "label": "Indonesia", "iso": "ID" },
  { "value": "+98", "label": "Iran", "iso": "IR" },
  { "value": "+964", "label": "Iraq", "iso": "IQ" },
  { "value": "+353", "label": "Ireland", "iso": "IE" },
  { "value": "+44-1624", "label": "Isle of Man", "iso": "IM" },
  { "value": "+972", "label": "Israel", "iso": "IL" },
  { "value": "+39", "label": "Italy", "iso": "IT" },
  { "value": "+225", "label": "Ivory Coast", "iso": "CI" },
  { "value": "+1-876", "label": "Jamaica", "iso": "JM" },
  { "value": "+81", "label": "Japan", "iso": "JP" },
  { "value": "+44-1534", "label": "Jersey", "iso": "JE" },
  { "value": "+962", "label": "Jordan", "iso": "JO" },
  { "value": "+7", "label": "Kazakhstan", "iso": "KZ" },
  { "value": "+254", "label": "Kenya", "iso": "KE" },
  { "value": "+686", "label": "Kiribati", "iso": "KI" },
  { "value": "+383", "label": "Kosovo", "iso": "XK" },
  { "value": "+965", "label": "Kuwait", "iso": "KW" },
  { "value": "+996", "label": "Kyrgyzstan", "iso": "KG" },
  { "value": "+856", "label": "Laos", "iso": "LA" },
  { "value": "+371", "label": "Latvia", "iso": "LV" },
  { "value": "+961", "label": "Lebanon", "iso": "LB" },
  { "value": "+266", "label": "Lesotho", "iso": "LS" },
  { "value": "+231", "label": "Liberia", "iso": "LR" },
  { "value": "+218", "label": "Libya", "iso": "LY" },
  { "value": "+423", "label": "Liechtenstein", "iso": "LI" },
  { "value": "+370", "label": "Lithuania", "iso": "LT" },
  { "value": "+352", "label": "Luxembourg", "iso": "LU" },
  { "value": "+853", "label": "Macau", "iso": "MO" },
  { "value": "+389", "label": "Macedonia", "iso": "MK" },
  { "value": "+261", "label": "Madagascar", "iso": "MG" },
  { "value": "+265", "label": "Malawi", "iso": "MW" },
  { "value": "+60", "label": "Malaysia", "iso": "MY" },
  { "value": "+960", "label": "Maldives", "iso": "MV" },
  { "value": "+223", "label": "Mali", "iso": "ML" },
  { "value": "+356", "label": "Malta", "iso": "MT" },
  { "value": "+692", "label": "Marshall Islands", "iso": "MH" },
  { "value": "+222", "label": "Mauritania", "iso": "MR" },
  { "value": "+230", "label": "Mauritius", "iso": "MU" },
  { "value": "+262", "label": "Mayotte", "iso": "YT" },
  { "value": "+52", "label": "Mexico", "iso": "MX" },
  { "value": "+691", "label": "Micronesia", "iso": "FM" },
  { "value": "+373", "label": "Moldova", "iso": "MD" },
  { "value": "+377", "label": "Monaco", "iso": "MC" },
  { "value": "+976", "label": "Mongolia", "iso": "MN" },
  { "value": "+382", "label": "Montenegro", "iso": "ME" },
  { "value": "+1-664", "label": "Montserrat", "iso": "MS" },
  { "value": "+212", "label": "Morocco", "iso": "MA" },
  { "value": "+258", "label": "Mozambique", "iso": "MZ" },
  { "value": "+95", "label": "Myanmar", "iso": "MM" },
  { "value": "+264", "label": "Namibia", "iso": "NA" },
  { "value": "+674", "label": "Nauru", "iso": "NR" },
  { "value": "+977", "label": "Nepal", "iso": "NP" },
  { "value": "+31", "label": "Netherlands", "iso": "NL" },
  { "value": "+599", "label": "Netherlands Antilles", "iso": "AN" },
  { "value": "+687", "label": "New Caledonia", "iso": "NC" },
  { "value": "+64", "label": "New Zealand", "iso": "NZ" },
  { "value": "+505", "label": "Nicaragua", "iso": "NI" },
  { "value": "+227", "label": "Niger", "iso": "NE" },
  { "value": "+234", "label": "Nigeria", "iso": "NG" },
  { "value": "+683", "label": "Niue", "iso": "NU" },
  { "value": "+850", "label": "North Korea", "iso": "KP" },
  { "value": "+1-670", "label": "Northern Mariana Islands", "iso": "MP" },
  { "value": "+47", "label": "Norway", "iso": "NO" },
  { "value": "+968", "label": "Oman", "iso": "OM" },
  { "value": "+92", "label": "Pakistan", "iso": "PK" },
  { "value": "+680", "label": "Palau", "iso": "PW" },
  { "value": "+970", "label": "Palestine", "iso": "PS" },
  { "value": "+507", "label": "Panama", "iso": "PA" },
  { "value": "+675", "label": "Papua New Guinea", "iso": "PG" },
  { "value": "+595", "label": "Paraguay", "iso": "PY" },
  { "value": "+51", "label": "Peru", "iso": "PE" },
  { "value": "+63", "label": "Philippines", "iso": "PH" },
  { "value": "+64", "label": "Pitcairn", "iso": "PN" },
  { "value": "+48", "label": "Poland", "iso": "PL" },
  { "value": "+351", "label": "Portugal", "iso": "PT" },
  { "value": "+1-787, +1-939", "label": "Puerto Rico", "iso": "PR" },
  { "value": "+974", "label": "Qatar", "iso": "QA" },
  { "value": "+242", "label": "Republic of the Congo", "iso": "CG" },
  { "value": "+262", "label": "Reunion", "iso": "RE" },
  { "value": "+40", "label": "Romania", "iso": "RO" },
  { "value": "+7", "label": "Russia", "iso": "RU" },
  { "value": "+250", "label": "Rwanda", "iso": "RW" },
  { "value": "+590", "label": "Saint Barthelemy", "iso": "BL" },
  { "value": "+290", "label": "Saint Helena", "iso": "SH" },
  { "value": "+1-869", "label": "Saint Kitts and Nevis", "iso": "KN" },
  { "value": "+1-758", "label": "Saint Lucia", "iso": "LC" },
  { "value": "+590", "label": "Saint Martin", "iso": "MF" },
  { "value": "+508", "label": "Saint Pierre and Miquelon", "iso": "PM" },
  { "value": "+1-784", "label": "Saint Vincent and the Grenadines", "iso": "VC" },
  { "value": "+685", "label": "Samoa", "iso": "WS" },
  { "value": "+378", "label": "San Marino", "iso": "SM" },
  { "value": "+239", "label": "Sao Tome and Principe", "iso": "ST" },
  { "value": "+966", "label": "Saudi Arabia", "iso": "SA" },
  { "value": "+221", "label": "Senegal", "iso": "SN" },
  { "value": "+381", "label": "Serbia", "iso": "RS" },
  { "value": "+248", "label": "Seychelles", "iso": "SC" },
  { "value": "+232", "label": "Sierra Leone", "iso": "SL" },
  { "value": "+65", "label": "Singapore", "iso": "SG" },
  { "value": "+1-721", "label": "Sint Maarten", "iso": "SX" },
  { "value": "+421", "label": "Slovakia", "iso": "SK" },
  { "value": "+386", "label": "Slovenia", "iso": "SI" },
  { "value": "+677", "label": "Solomon Islands", "iso": "SB" },
  { "value": "+252", "label": "Somalia", "iso": "SO" },
  { "value": "+27", "label": "South Africa", "iso": "ZA" },
  { "value": "+82", "label": "South Korea", "iso": "KR" },
  { "value": "+211", "label": "South Sudan", "iso": "SS" },
  { "value": "+34", "label": "Spain", "iso": "ES" },
  { "value": "+94", "label": "Sri Lanka", "iso": "LK" },
  { "value": "+249", "label": "Sudan", "iso": "SD" },
  { "value": "+597", "label": "Suriname", "iso": "SR" },
  { "value": "+47", "label": "Svalbard and Jan Mayen", "iso": "SJ" },
  { "value": "+268", "label": "Swaziland", "iso": "SZ" },
  { "value": "+46", "label": "Sweden", "iso": "SE" },
  { "value": "+41", "label": "Switzerland", "iso": "CH" },
  { "value": "+963", "label": "Syria", "iso": "SY" },
  { "value": "+886", "label": "Taiwan", "iso": "TW" },
  { "value": "+992", "label": "Tajikistan", "iso": "TJ" },
  { "value": "+255", "label": "Tanzania", "iso": "TZ" },
  { "value": "+66", "label": "Thailand", "iso": "TH" },
  { "value": "+228", "label": "Togo", "iso": "TG" },
   
];

const ContactForm = () => {
  const [selectedType, setSelectedType] = useState("Freelancer");

  const types = ["Freelancer", "MSME", "E-Comm", "Service"];

  return (
    <div className="w-full  bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-[1300px] bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-200 box-border">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          How Can We Help You Today?
        </h2>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          Share your details, and our team will get back to you within 24 hours.
        </p>

        {/* Select Section */}
        <div className="mt-6">
          <label className="block text-gray-800 font-medium mb-3">
            Select <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2.5 rounded-full border text-sm md:text-base font-medium transition-all duration-200 ${
                  selectedType === type
                    ? "bg-[#EB5C2626] border-[#CFCFCF] text-black"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center px-3 text-gray-700 border-r border-gray-300 text-sm bg-gray-50">
                <select className="w-full  py-2.5 text-sm bg-white outline-none">
              {
                countryCodes.map((country) => <option key={country.iso} value={country.value}>({country.value}){country.iso}</option>)
              }
            </select>
              </div>
              <input
                type="tel"
                placeholder="Enter your number"
                className="w-full px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Select Country <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none">
              {
                countryCodes.map((country) => <option key={country.iso} value={country.value}>{country.label}</option>)
              }
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-gray-800 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="What do we call you?"
              className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-start gap-2 text-xs md:text-sm text-gray-600 leading-relaxed">
            <input
              type="checkbox"
              className="mt-1 accent-indigo-600 cursor-pointer"
            />
            <p>
              By submitting this form, you agree to be contacted by our team. We
              respect your privacy; please read our{" "}
              <a href="/privacy-policy" className="text-indigo-600 underline">
                Privacy Policy
              </a>
              . If you wish to opt out of future communications, please let us
              know via email.
            </p>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-8 py-2.5 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
