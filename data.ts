// --- MOCK DATA ---
// In a real app, this data would come from a server/API.

export const locationData = {
  divisions: [
    {
      en: "Barisal", bn: "বরিশাল",
      districts: [
        { en: "Barguna", bn: "বরগুনা", upazilas: [{ en: "Amtali", bn: "আমতলী" }, { en: "Bamna", bn: "বামনা" }, { en: "Barguna Sadar", bn: "বরগুনা সদর" }, { en: "Betagi", bn: "বেতাগী" }, { en: "Patharghata", bn: "পাথরঘাটা" }, { en: "Taltali", bn: "তালতলী" }] },
        { en: "Barisal", bn: "বরিশাল", upazilas: [{ en: "Agailjhara", bn: "আগৈলঝাড়া" }, { en: "Babuganj", bn: "বাবুগঞ্জ" }, { en: "Bakerganj", bn: "বাকেরগঞ্জ" }, { en: "Banaripara", bn: "বানারীপাড়া" }, { en: "Gaurnadi", bn: "গৌরনদী" }, { en: "Hizla", bn: "হিজলা" }, { en: "Barishal Sadar", bn: "বরিশাল সদর" }, { en: "Mehendiganj", bn: "মেহেন্দিগঞ্জ" }, { en: "Muladi", bn: "মুলাদী" }, { en: "Wazirpur", bn: "উজিরপুর" }] },
        { en: "Bhola", bn: "ভোলা", upazilas: [{ en: "Bhola Sadar", bn: "ভোলা সদর" }, { en: "Burhanuddin", bn: "বোরহানউদ্দিন" }, { en: "Char Fasson", bn: "চরফ্যাশন" }, { en: "Daulatkhan", bn: "দৌলতখান" }, { en: "Lalmohan", bn: "লালমোহন" }, { en: "Manpura", bn: "মনপুরা" }, { en: "Tazumuddin", bn: "তজুমদ্দিন" }] },
        { en: "Jhalokati", bn: "ঝালকাঠি", upazilas: [{ en: "Jhalokati Sadar", bn: "ঝালকাঠি সদর" }, { en: "Kathalia", bn: "কাঁঠালিয়া" }, { en: "Nalchity", bn: "নলছিটি" }, { en: "Rajapur", bn: "রাজাপুর" }] },
        { en: "Patuakhali", bn: "পটুয়াখালী", upazilas: [{ en: "Bauphal", bn: "বাউফল" }, { en: "Dashmina", bn: "দশমিনা" }, { en: "Galachipa", bn: "গলাচিপা" }, { en: "Kalapara", bn: "কলাপাড়া" }, { en: "Mirzaganj", bn: "মির্জাগঞ্জ" }, { en: "Patuakhali Sadar", bn: "পটুয়াখালী সদর" }, { en: "Rangabali", bn: "রাঙ্গাবালী" }, { en: "Dumki", bn: "দুমকি" }] },
        { en: "Pirojpur", bn: "পিরোজপুর", upazilas: [{ en: "Bhandaria", bn: "ভান্ডারিয়া" }, { en: "Kawkhali", bn: "কাউখালী" }, { en: "Mathbaria", bn: "মঠবাড়িয়া" }, { en: "Nazirpur", bn: "নাজিরপুর" }, { en: "Pirojpur Sadar", bn: "পিরোজপুর সদর" }, { en: "Nesarabad (Swarupkati)", bn: "নেছারাবাদ (স্বরূপকাঠি)" }, { en: "Zianagar", bn: "জিয়ানগর" }] }
      ]
    },
    {
      en: "Chittagong", bn: "চট্টগ্রাম",
      districts: [
        { en: "Bandarban", bn: "বান্দরবান", upazilas: [{ en: "Alikadam", bn: "আলীকদম" }, { en: "Bandarban Sadar", bn: "বান্দরবান সদর" }, { en: "Lama", bn: "লামা" }, { en: "Naikhongchhari", bn: "নাইক্ষ্যংছড়ি" }, { en: "Rowangchhari", bn: "রোয়াংছড়ি" }, { en: "Ruma", bn: "রুমা" }, { en: "Thanchi", bn: "থানচি" }] },
        { en: "Brahmanbaria", bn: "ব্রাহ্মণবাড়িয়া", upazilas: [{ en: "Akhaura", bn: "আখাউড়া" }, { en: "Bancharampur", bn: "বাঞ্ছারামপুর" }, { en: "Brahmanbaria Sadar", bn: "ব্রাহ্মণবাড়িয়া সদর" }, { en: "Kasba", bn: "কসবা" }, { en: "Nabinagar", bn: "নবীনগর" }, { en: "Nasirnagar", bn: "নাসিরনগর" }, { en: "Sarail", bn: "সরাইল" }, { en: "Ashuganj", bn: "আশুগঞ্জ" }, { en: "Bijoynagar", bn: "বিজয়নগর" }] },
        { en: "Chandpur", bn: "চাঁদপুর", upazilas: [{ en: "Chandpur Sadar", bn: "চাঁদপুর সদর" }, { en: "Faridganj", bn: "ফরিদগঞ্জ" }, { en: "Haimchar", bn: "হাইমচর" }, { en: "Haziganj", bn: "হাজীগঞ্জ" }, { en: "Kachua", bn: "কচুয়া" }, { en: "Matlab Dakshin", bn: "মতলব দক্ষিণ" }, { en: "Matlab Uttar", bn: "মতলব উত্তর" }, { en: "Shahrasti", bn: "শাহরাস্তি" }] },
        { en: "Chittagong", bn: "চট্টগ্রাম", upazilas: [{ en: "Anwara", bn: "আনোয়ারা" }, { en: "Banshkhali", bn: "বাঁশখালী" }, { en: "Boalkhali", bn: "বোয়ালখালী" }, { en: "Chandanaish", bn: "চন্দনাইশ" }, { en: "Fatikchhari", bn: "ফটিকছড়ি" }, { en: "Hathazari", bn: "হাটহাজারী" }, { en: "Lohagara", bn: "লোহাগাড়া" }, { en: "Mirsharai", bn: "মীরসরাই" }, { en: "Patiya", bn: "পটিয়া" }, { en: "Rangunia", bn: "রাঙ্গুনিয়া" }, { en: "Raozan", bn: "রাউজান" }, { en: "Sandwip", bn: "সন্দ্বীপ" }, { en: "Satkania", bn: "সাতকানিয়া" }, { en: "Sitakunda", bn: "সীতাকুণ্ড" }, { en: "Karnaphuli", bn: "কর্ণফুলী" }] },
        { en: "Comilla", bn: "কুমিল্লা", upazilas: [{ en: "Barura", bn: "বরুড়া" }, { en: "Brahmanpara", bn: "ব্রাহ্মণপাড়া" }, { en: "Burichang", bn: "বুড়িচং" }, { en: "Chandina", bn: "চান্দিনা" }, { en: "Chauddagram", bn: "চৌদ্দগ্রাম" }, { en: "Daudkandi", bn: "দাউদকান্দি" }, { en: "Debidwar", bn: "দেবিদ্বার" }, { en: "Homna", bn: "হোমনা" }, { en: "Laksam", bn: "লাকসাম" }, { en: "Monohorgonj", bn: "মনোহরগঞ্জ" }, { en: "Meghna", bn: "মেঘনা" }, { en: "Muradnagar", bn: "মুরাদনগর" }, { en: "Nangalkot", bn: "নাঙ্গলকোট" }, { en: "Cumilla Sadar", bn: "কুমিল্লা সদর" }, { en: "Titas", bn: "তিতাস" }, { en: "Cumilla Sadar South", bn: "কুমিল্লা সদর দক্ষিণ" }] },
        { en: "Cox's Bazar", bn: "কক্সবাজার", upazilas: [{ en: "Chakaria", bn: "চকরিয়া" }, { en: "Cox's Bazar Sadar", bn: "কক্সবাজার সদর" }, { en: "Kutubdia", bn: "কুতুবদিয়া" }, { en: "Maheshkhali", bn: "মহেশখালী" }, { en: "Ramu", bn: "রামু" }, { en: "Teknaf", bn: "টেকনাফ" }, { en: "Ukhia", bn: "উখিয়া" }, { en: "Pekua", bn: "পেকুয়া" }] },
        { en: "Feni", bn: "ফেনী", upazilas: [{ en: "Chhagalnaiya", bn: "ছাগলনাইয়া" }, { en: "Daganbhuiyan", bn: "দাগনভূঞা" }, { en: "Feni Sadar", bn: "ফেনী সদর" }, { en: "Parshuram", bn: "পরশুরাম" }, { en: "Sonagazi", bn: "সোনাগাজী" }, { en: "Fulgazi", bn: "ফুলগাজী" }] },
        { en: "Khagrachhari", bn: "খাগড়াছড়ি", upazilas: [{ en: "Dighinala", bn: "দীঘিনালা" }, { en: "Khagrachhari", bn: "খাগড়াছড়ি" }, { en: "Lakshmichhari", bn: "লক্ষীছড়ি" }, { en: "Mahalchhari", bn: "মহালছড়ি" }, { en: "Manikchhari", bn: "মানিকছড়ি" }, { en: "Matiranga", bn: "মাটিরাঙ্গা" }, { en: "Panchhari", bn: "পানছড়ি" }, { en: "Ramgarh", bn: "রামগড়" }] },
        { en: "Lakshmipur", bn: "লক্ষ্মীপুর", upazilas: [{ en: "Kamalnagar", bn: "কমলনগর" }, { en: "Lakshmipur Sadar", bn: "লক্ষ্মীপুর সদর" }, { en: "Raipur", bn: "রায়পুর" }, { en: "Ramganj", bn: "রামগঞ্জ" }, { en: "Ramgati", bn: "রামগতি" }] },
        { en: "Noakhali", bn: "নোয়াখালী", upazilas: [{ en: "Begumganj", bn: "বেগমগঞ্জ" }, { en: "Chatkhil", bn: "চাটখিল" }, { en: "Noakhali Sadar", bn: "নোয়াখালী সদর" }, { en: "Hatiya", bn: "হাতিয়া" }, { en: "Kabirhat", bn: "কবিরহাট" }, { en: "Senbagh", bn: "সেনবাগ" }, { en: "Sonaimuri", bn: "সোনাইমুড়ী" }, { en: "Subarnachar", bn: "সুবর্ণচর" }, { en: "Companiganj", bn: "কোম্পানীগঞ্জ" }] },
        { en: "Rangamati", bn: "রাঙ্গামাটি", upazilas: [{ en: "Bagaichhari", bn: "বাঘাইছড়ি" }, { en: "Barkal", bn: "বরকল" }, { en: "Kawkhali (Betbunia)", bn: "কাউখালী (বেতবুনিয়া)" }, { en: "Belaichhari", bn: "বিলাইছড়ি" }, { en: "Juraichhari", bn: "জুরাছড়ি" }, { en: "Kaptai", bn: "কাপ্তাই" }, { en: "Langadu", bn: "লংগদু" }, { en: "Naniarchar", bn: "নানিয়ারচর" }, { en: "Rajasthali", bn: "রাজস্থলী" }, { en: "Rangamati Sadar", bn: "রাঙ্গামাটি সদর" }] }
      ]
    },
    {
      en: "Dhaka", bn: "ঢাকা",
      districts: [
        { en: "Dhaka", bn: "ঢাকা", upazilas: [{ en: "Savar", bn: "সাভার" }, { en: "Dhamrai", bn: "ধামরাই" }, { en: "Keraniganj", bn: "কেরানীগঞ্জ" }, { en: "Nawabganj", bn: "নবাবগঞ্জ" }, { en: "Dohar", bn: "দোহার" }] },
        { en: "Faridpur", bn: "ফরিদপুর", upazilas: [{ en: "Alfadanga", bn: "আলফাডাঙ্গা" }, { en: "Bhanga", bn: "ভাঙ্গা" }, { en: "Boalmari", bn: "বোয়ালমারী" }, { en: "Charbhadrasan", bn: "চরভদ্রাসন" }, { en: "Faridpur Sadar", bn: "ফরিদপুর সদর" }, { en: "Madhukhali", bn: "মধুখালী" }, { en: "Nagarkanda", bn: "নগরকান্দা" }, { en: "Sadarpur", bn: "সদরপুর" }, { en: "Saltha", bn: "সালথা" }] },
        { en: "Gazipur", bn: "গাজীপুর", upazilas: [{ en: "Gazipur Sadar", bn: "গাজীপুর সদর" }, { en: "Kaliakair", bn: "কালিয়াকৈর" }, { en: "Kapasia", bn: "কাপাসিয়া" }, { en: "Sreepur", bn: "শ্রীপুর" }, { en: "Kaliganj", bn: "কালীগঞ্জ" }] },
        { en: "Gopalganj", bn: "গোপালগঞ্জ", upazilas: [{ en: "Gopalganj Sadar", bn: "গোপালগঞ্জ সদর" }, { en: "Kashiani", bn: "কাশিয়ানী" }, { en: "Kotalipara", bn: "কোটালীপাড়া" }, { en: "Muksudpur", bn: "মুকসুদপুর" }, { en: "Tungipara", bn: "টুঙ্গিপাড়া" }] },
        { en: "Kishoreganj", bn: "কিশোরগঞ্জ", upazilas: [{ en: "Astagram", bn: "অষ্টগ্রাম" }, { en: "Bajitpur", bn: "বাজিতপুর" }, { en: "Bhairab", bn: "ভৈরব" }, { en: "Hossainpur", bn: "হোসেনপুর" }, { en: "Itna", bn: "ইটনা" }, { en: "Karimganj", bn: "করিমগঞ্জ" }, { en: "Katiadi", bn: "কটিয়াদী" }, { en: "Kishoreganj Sadar", bn: "কিশোরগঞ্জ সদর" }, { en: "Kuliarchar", bn: "কুলিয়ারচর" }, { en: "Mithamain", bn: "মিঠামইন" }, { en: "Nikli", bn: "নিকলী" }, { en: "Pakundia", bn: "পাকুন্দিয়া" }, { en: "Tarail", bn: "তাড়াইল" }] },
        { en: "Madaripur", bn: "মাদারীপুর", upazilas: [{ en: "Madaripur Sadar", bn: "মাদারীপুর সদর" }, { en: "Kalkini", bn: "কালকিনি" }, { en: "Rajoir", bn: "রাজৈর" }, { en: "Shibchar", bn: "শিবচর" }] },
        { en: "Manikganj", bn: "মানিকগঞ্জ", upazilas: [{ en: "Daulatpur", bn: "দৌলতপুর" }, { en: "Ghior", bn: "ঘিওর" }, { en: "Harirampur", bn: "হরিরামপুর" }, { en: "Manikganj Sadar", bn: "মানিকগঞ্জ সদর" }, { en: "Saturia", bn: "সাটুরিয়া" }, { en: "Shivalaya", bn: "শিবালয়" }, { en: "Singair", bn: "সিংগাইর" }] },
        { en: "Munshiganj", bn: "মুন্সিগঞ্জ", upazilas: [{ en: "Gazaria", bn: "গজারিয়া" }, { en: "Lohajang", bn: "লৌহজং" }, { en: "Munshiganj Sadar", bn: "মুন্সিগঞ্জ সদর" }, { en: "Sirajdikhan", bn: "সিরাজদিখান" }, { en: "Sreenagar", bn: "শ্রীনগর" }, { en: "Tongibari", bn: "টঙ্গিবাড়ী" }] },
        { en: "Narayanganj", bn: "নারায়ণগঞ্জ", upazilas: [{ en: "Araihazar", bn: "আড়াইহাজার" }, { en: "Bandar", bn: "বন্দর" }, { en: "Narayanganj Sadar", bn: "নারায়ণগঞ্জ সদর" }, { en: "Rupganj", bn: "রূপগঞ্জ" }, { en: "Sonargaon", bn: "সোনারগাঁও" }] },
        { en: "Narsingdi", bn: "নরসিংদী", upazilas: [{ en: "Narsingdi Sadar", bn: "নরসিংদী সদর" }, { en: "Belabo", bn: "বেলাবো" }, { en: "Monohardi", bn: "মনোহরদী" }, { en: "Palash", bn: "পলাশ" }, { en: "Raipura", bn: "রায়পুরা" }, { en: "Shibpur", bn: "শিবপুর" }] },
        { en: "Rajbari", bn: "রাজবাড়ী", upazilas: [{ en: "Baliakandi", bn: "বালিয়াকান্দি" }, { en: "Goalandaghat", bn: "গোয়ালন্দ ঘাট" }, { en: "Pangsha", bn: "পাংশা" }, { en: "Rajbari Sadar", bn: "রাজবাড়ী সদর" }, { en: "Kalukhali", bn: "কালুখালী" }] },
        { en: "Shariatpur", bn: "শরীয়তপুর", upazilas: [{ en: "Bhedarganj", bn: "ভেদরগঞ্জ" }, { en: "Damudya", bn: "ডামুড্যা" }, { en: "Gosairhat", bn: "গোসাইরহাট" }, { en: "Naria", bn: "নড়িয়া" }, { en: "Shariatpur Sadar", bn: "শরীয়তপুর সদর" }, { en: "Zajira", bn: "জাজিরা" }, { en: "Sakhipur", bn: "সখিপুর" }] },
        { en: "Tangail", bn: "টাঙ্গাইল", upazilas: [{ en: "Gopalpur", bn: "গোপালপুর" }, { en: "Basail", bn: "বাসাইল" }, { en: "Bhuapur", bn: "ভূঞাপুর" }, { en: "Delduar", bn: "দেলদুয়ার" }, { en: "Ghatail", bn: "ঘাটাইল" }, { en: "Kalihati", bn: "কালিহাতী" }, { en: "Madhupur", bn: "মধুপুর" }, { en: "Mirzapur", bn: "মির্জাপুর" }, { en: "Nagarpur", bn: "নাগরপুর" }, { en: "Sakhipur", bn: "সখিপুর" }, { en: "Tangail Sadar", bn: "টাঙ্গাইল সদর" }, { en: "Dhanbari", bn: "ধনবাড়ী" }] }
      ]
    },
    {
      en: "Khulna", bn: "খুলনা",
      districts: [
        { en: "Bagerhat", bn: "বাগেরহাট", upazilas: [{ en: "Bagerhat Sadar", bn: "বাগেরহাট সদর" }, { en: "Chitalmari", bn: "চিতলমারী" }, { en: "Fakirhat", bn: "ফকিরহাট" }, { en: "Kachua", bn: "কচুয়া" }, { en: "Mollahat", bn: "মোল্লাহাট" }, { en: "Mongla", bn: "মোংলা" }, { en: "Morrelganj", bn: "মোড়েলগঞ্জ" }, { en: "Rampal", bn: "রামপাল" }, { en: "Sarankhola", bn: "শরণখোলা" }] },
        { en: "Chuadanga", bn: "চুয়াডাঙ্গা", upazilas: [{ en: "Alamdanga", bn: "আলমডাঙ্গা" }, { en: "Chuadanga Sadar", bn: "চুয়াডাঙ্গা সদর" }, { en: "Damurhuda", bn: "দামুড়হুদা" }, { en: "Jibannagar", bn: "জীবননগর" }] },
        { en: "Jessore", bn: "যশোর", upazilas: [{ en: "Abhaynagar", bn: "অভয়নগর" }, { en: "Bagherpara", bn: "বাঘারপাড়া" }, { en: "Chaugachha", bn: "চৌগাছা" }, { en: "Jhikargachha", bn: "ঝিকরগাছা" }, { en: "Keshabpur", bn: "কেশবপুর" }, { en: "Jessore Sadar", bn: "যশোর সদর" }, { en: "Manirampur", bn: "মণিরামপুর" }, { en: "Sharsha", bn: "শার্শা" }] },
        { en: "Jhenaidah", bn: "ঝিনাইদহ", upazilas: [{ en: "Harinakunda", bn: "হরিণাকুন্ডু" }, { en: "Jhenaidah Sadar", bn: "ঝিনাইদহ সদর" }, { en: "Kaliganj", bn: "কালীগঞ্জ" }, { en: "Kotchandpur", bn: "কোটচাঁদপুর" }, { en: "Maheshpur", bn: "মহেশপুর" }, { en: "Shailkupa", bn: "শৈলকুপা" }] },
        { en: "Khulna", bn: "খুলনা", upazilas: [{ en: "Batiaghata", bn: "বটিয়াঘাটা" }, { en: "Dacope", bn: "দাকোপ" }, { en: "Dumuria", bn: "ডুমুরিয়া" }, { en: "Dighalia", bn: "দিঘলিয়া" }, { en: "Koyra", bn: "কয়রা" }, { en: "Paikgachha", bn: "পাইকগাছা" }, { en: "Phultala", bn: "ফুলতলা" }, { en: "Rupsha", bn: "রূপসা" }, { en: "Terokhada", bn: "তেরখাদা" }] },
        { en: "Kushtia", bn: "কুষ্টিয়া", upazilas: [{ en: "Bheramara", bn: "ভেড়ামারা" }, { en: "Daulatpur", bn: "দৌলতপুর" }, { en: "Khoksa", bn: "খোকসা" }, { en: "Kumarkhali", bn: "কুমারখালী" }, { en: "Kushtia Sadar", bn: "কুষ্টিয়া সদর" }, { en: "Mirpur", bn: "মিরপুর" }] },
        { en: "Magura", bn: "মাগুরা", upazilas: [{ en: "Magura Sadar", bn: "মাগুরা সদর" }, { en: "Mohammadpur", bn: "محمد پور" }, { en: "Shalikha", bn: "শালিখা" }, { en: "Sreepur", bn: "শ্রীপুর" }] },
        { en: "Meherpur", bn: "মেহেরপুর", upazilas: [{ en: "Gangni", bn: "গাংনী" }, { en: "Meherpur Sadar", bn: "মেহেরপুর সদর" }, { en: "Mujibnagar", bn: "মুজিবনগর" }] },
        { en: "Narail", bn: "নড়াইল", upazilas: [{ en: "Kalia", bn: "কালিয়া" }, { en: "Lohagara", bn: "লোহাগড়া" }, { en: "Narail Sadar", bn: "নড়াইল সদর" }] },
        { en: "Satkhira", bn: "সাতক্ষীরা", upazilas: [{ en: "Assasuni", bn: "আশাশুনি" }, { en: "Debhata", bn: "দেবহাটা" }, { en: "Kalaroa", bn: "কলারোয়া" }, { en: "Kaliganj", bn: "কালীগঞ্জ" }, { en: "Satkhira Sadar", bn: "সাতক্ষীরা সদর" }, { en: "Shyamnagar", bn: "শ্যামনগর" }, { en: "Tala", bn: "তালা" }] }
      ]
    },
    {
      en: "Mymensingh", bn: "ময়মনসিংহ",
      districts: [
        { en: "Jamalpur", bn: "জামালপুর", upazilas: [{ en: "Baksiganj", bn: "বকশীগঞ্জ" }, { en: "Dewanganj", bn: "দেওয়ানগঞ্জ" }, { en: "Islampur", bn: "ইসলামপুর" }, { en: "Jamalpur Sadar", bn: "জামালপুর সদর" }, { en: "Madarganj", bn: "মাদারগঞ্জ" }, { en: "Melandaha", bn: "মেলান্দহ" }, { en: "Sarishabari", bn: "সরিষাবাড়ী" }] },
        { en: "Mymensingh", bn: "ময়মনসিংহ", upazilas: [{ en: "Bhaluka", bn: "ভালুকা" }, { en: "Dhobaura", bn: "ধোবাউড়া" }, { en: "Fulbaria", bn: "ফুলবাড়ীয়া" }, { en: "Gaffargaon", bn: "গফরগাঁও" }, { en: "Gauripur", bn: "গৌরীপুর" }, { en: "Haluaghat", bn: "হালুয়াঘাট" }, { en: "Ishwarganj", bn: "ঈশ্বরগঞ্জ" }, { en: "Mymensingh Sadar", bn: "ময়মনসিংহ সদর" }, { en: "Muktagachha", bn: "মুক্তাগাছা" }, { en: "Nandail", bn: "নান্দাইল" }, { en: "Phulpur", bn: "ফুলপুর" }, { en: "Trishal", bn: "ত্রিশাল" }, { en: "Tara Khanda", bn: "তারাকান্দা" }] },
        { en: "Netrokona", bn: "নেত্রকোনা", upazilas: [{ en: "Atpara", bn: "আটপাড়া" }, { en: "Barhatta", bn: "বারহাট্টা" }, { en: "Durgapur", bn: "দুর্গাপুর" }, { en: "Khaliajuri", bn: "খালিয়াজুরী" }, { en: "Kalmakanda", bn: "কলমাকান্দা" }, { en: "Kendua", bn: "কেন্দুয়া" }, { en: "Madan", bn: "মদন" }, { en: "Mohanganj", bn: "মোহনগঞ্জ" }, { en: "Netrokona Sadar", bn: "নেত্রকোনা সদর" }, { en: "Purbadhala", bn: "পূর্বধলা" }] },
        { en: "Sherpur", bn: "শেরপুর", upazilas: [{ en: "Jhenaigati", bn: "ঝিনাইগাতী" }, { en: "Nakla", bn: "নকলা" }, { en: "Nalitabari", bn: "নালিতাবাড়ী" }, { en: "Sherpur Sadar", bn: "শেরপুর সদর" }, { en: "Sreebardi", bn: "শ্রীবরদী" }] }
      ]
    },
    {
      en: "Rajshahi", bn: "রাজশাহী",
      districts: [
        { en: "Bogra", bn: "বগুড়া", upazilas: [{ en: "Adamdighi", bn: "আদমদীঘি" }, { en: "Bogra Sadar", bn: "বগুড়া সদর" }, { en: "Dhunat", bn: "ধুনট" }, { en: "Dhupchanchia", bn: "দুপচাঁচিয়া" }, { en: "Gabtali", bn: "গাবতলী" }, { en: "Kahaloo", bn: "কাহালু" }, { en: "Nandigram", bn: "নন্দীগ্রাম" }, { en: "Sariakandi", bn: "সারিয়াকান্দি" }, { en: "Shajahanpur", bn: "শাজাহานপুর" }, { en: "Sherpur", bn: "শেরপুর" }, { en: "Shibganj", bn: "শিবগঞ্জ" }, { en: "Sonatala", bn: "সোনাতলা" }] },
        { en: "Chapainawabganj", bn: "চাঁপাইনবাবগঞ্জ", upazilas: [{ en: "Bholahat", bn: "ভোলাহাট" }, { en: "Gomastapur", bn: "গোমস্তাপুর" }, { en: "Nachole", bn: "নাচোল" }, { en: "Nawabganj Sadar", bn: "নবাবগঞ্জ সদর" }, { en: "Shibganj", bn: "শিবগঞ্জ" }] },
        { en: "Joypurhat", bn: "জয়পুরহাট", upazilas: [{ en: "Akkelpur", bn: "আক্কেলপুর" }, { en: "Joypurhat Sadar", bn: "জয়পুরহাট সদর" }, { en: "Kalai", bn: "কালাই" }, { en: "Khetlal", bn: "ক্ষেতলাল" }, { en: "Panchbibi", bn: "পাঁচবিবি" }] },
        { en: "Naogaon", bn: "নওগাঁ", upazilas: [{ en: "Atrai", bn: "আত্রাই" }, { en: "Badalgachhi", bn: "বদলগাছী" }, { en: "Dhamoirhat", bn: "ধামইরহাট" }, { en: "Manda", bn: "মান্দা" }, { en: "Mahadebpur", bn: "মহাদেবপুর" }, { en: "Naogaon Sadar", bn: "নওগাঁ সদর" }, { en: "Niamatpur", bn: "নিয়ামতপুর" }, { en: "Patnitala", bn: "পত্নীতলা" }, { en: "Porsha", bn: "পোরশা" }, { en: "Raninagar", bn: "রাণীনগর" }, { en: "Sapahar", bn: "সাপাহার" }] },
        { en: "Natore", bn: "নাটোর", upazilas: [{ en: "Bagatipara", bn: "বাগাতিপাড়া" }, { en: "Baraigram", bn: "বড়াইগ্রাম" }, { en: "Gurudaspur", bn: "গুরুদাসপুর" }, { en: "Lalpur", bn: "লালপুর" }, { en: "Natore Sadar", bn: "নাটোর সদর" }, { en: "Singra", bn: "সিংড়া" }, { en: "Naldanga", bn: "নলডাঙ্গা" }] },
        { en: "Pabna", bn: "পাবনা", upazilas: [{ en: "Atgharia", bn: "আটঘরিয়া" }, { en: "Bera", bn: "বেড়া" }, { en: "Bhangura", bn: "ভাঙ্গুড়া" }, { en: "Chatmohar", bn: "চাটমোহর" }, { en: "Faridpur", bn: "ফরিদপুর" }, { en: "Ishwardi", bn: "ঈশ্বরদী" }, { en: "Pabna Sadar", bn: "পাবনা সদর" }, { en: "Santhia", bn: "সাঁথিয়া" }, { en: "Sujanagar", bn: "সুজানগর" }] },
        { en: "Rajshahi", bn: "রাজশাহী", upazilas: [{ en: "Bagha", bn: "বাঘা" }, { en: "Bagmara", bn: "বাগমারা" }, { en: "Charghat", bn: "চারঘাট" }, { en: "Durgapur", bn: "দুর্গাপুর" }, { en: "Godagari", bn: "গোদাগাড়ী" }, { en: "Mohanpur", bn: "মোহনপুর" }, { en: "Paba", bn: "পবা" }, { en: "Puthia", bn: "পুঠিয়া" }, { en: "Tanore", bn: "তানোর" }] },
        { en: "Sirajganj", bn: "সিরাজগঞ্জ", upazilas: [{ en: "Belkuchi", bn: "বেলকুচি" }, { en: "Chauhali", bn: "চৌহালি" }, { en: "Kamarkhanda", bn: "কামারখন্দ" }, { en: "Kazipur", bn: "কাজীপুর" }, { en: "Raiganj", bn: "রায়গঞ্জ" }, { en: "Shahjadpur", bn: "শাহজাদপুর" }, { en: "Sirajganj Sadar", bn: "সিরাজগঞ্জ সদর" }, { en: "Tarash", bn: "তাড়াশ" }, { en: "Ullahpara", bn: "উল্লাপাড়া" }] }
      ]
    },
    {
      en: "Rangpur", bn: "রংপুর",
      districts: [
        { en: "Dinajpur", bn: "দিনাজপুর", upazilas: [{ en: "Biral", bn: "বিরামপুর" }, { en: "Birganj", bn: "বীরগঞ্জ" }, { en: "Bochaganj", bn: "বোচাগঞ্জ" }, { en: "Chirirbandar", bn: "চিরিরবন্দর" }, { en: "Phulbari", bn: "ফুলবাড়ী" }, { en: "Ghoraghat", bn: "ঘোড়াঘাট" }, { en: "Hakimpur", bn: "হাকিমপুর" }, { en: "Kaharole", bn: "কাহারোল" }, { en: "Khansama", bn: "খানসামা" }, { en: "Dinajpur Sadar", bn: "দিনাজপুর সদর" }, { en: "Nawabganj", bn: "নবাবগঞ্জ" }, { en: "Parbatipur", bn: "পার্বতীপুর" }, { en: "Birampur", bn: "বিরামপুর" }] },
        { en: "Gaibandha", bn: "গাইবান্ধা", upazilas: [{ en: "Phulchhari", bn: "ফুলছড়ি" }, { en: "Gaibandha Sadar", bn: "গাইবান্ধা সদর" }, { en: "Gobindaganj", bn: "গোবিন্দগঞ্জ" }, { en: "Palashbari", bn: "পলাশবাড়ী" }, { en: "Sadullapur", bn: "সাদুল্লাপুর" }, { en: "Sughatta", bn: "সাঘাটা" }, { en: "Sundarganj", bn: "সুন্দরগঞ্জ" }] },
        { en: "Kurigram", bn: "কুড়িগ্রাম", upazilas: [{ en: "Bhurungamari", bn: "ভুরুঙ্গামারী" }, { en: "Char Rajibpur", bn: "চর রাজিবপুর" }, { en: "Chilmari", bn: "চিলমারী" }, { en: "Phulbari", bn: "ফুলবাড়ী" }, { en: "Kurigram Sadar", bn: "কুড়িগ্রাম সদর" }, { en: "Nageshwari", bn: "নাগেশ্বরী" }, { en: "Rajarhat", bn: "রাজারহাট" }, { en: "Raomari", bn: "রৌমারী" }, { en: "Ulipur", bn: "উলিপুর" }] },
        { en: "Lalmonirhat", bn: "লালমনিরহাট", upazilas: [{ en: "Aditmari", bn: "আদিতমারী" }, { en: "Hatibandha", bn: "হাতীবান্ধা" }, { en: "Kaliganj", bn: "কালীগঞ্জ" }, { en: "Lalmonirhat Sadar", bn: "লালমনিরহাট সদর" }, { en: "Patgram", bn: "পাটগ্রাম" }] },
        { en: "Nilphamari", bn: "নীলফামারী", upazilas: [{ en: "Dimla", bn: "ডিমলা" }, { en: "Domar", bn: "ডোমার" }, { en: "Jaldhaka", bn: "জলঢাকা" }, { en: "Kishoreganj", bn: "কিশোরগঞ্জ" }, { en: "Nilphamari Sadar", bn: "নীলফামারী সদর" }, { en: "Saidpur", bn: "সৈয়দপুর" }] },
        { en: "Panchagarh", bn: "পঞ্চগড়", upazilas: [{ en: "Atwari", bn: "আটোয়ারী" }, { en: "Boda", bn: "বোদা" }, { en: "Debiganj", bn: "দেবীগঞ্জ" }, { en: "Panchagarh Sadar", bn: "পঞ্চগড় সদর" }, { en: "Tetulia", bn: "তেতুলিয়া" }] },
        { en: "Rangpur", bn: "রংপুর", upazilas: [{ en: "Badarganj", bn: "বদরগঞ্জ" }, { en: "Gangachhara", bn: "গংগাচড়া" }, { en: "Kaunia", bn: "কাউনিয়া" }, { en: "Rangpur Sadar", bn: "রংপুর সদর" }, { en: "Mithapukur", bn: "মিঠাপুকুর" }, { en: "Pirgachha", bn: "পীরগাছা" }, { en: "Pirganj", bn: "পীরগঞ্জ" }, { en: "Taraganj", bn: "তারাগঞ্জ" }] },
        { en: "Thakurgaon", bn: "ঠাকুরগাঁও", upazilas: [{ en: "Baliadangi", bn: "বালিয়াডাঙ্গী" }, { en: "Haripur", bn: "হরিপুর" }, { en: "Pirganj", bn: "পীরগঞ্জ" }, { en: "Ranisankail", bn: "রাণীশংকৈল" }, { en: "Thakurgaon Sadar", bn: "ঠাকুরগাঁও সদর" }] }
      ]
    },
    {
      en: "Sylhet", bn: "সিলেট",
      districts: [
        { en: "Habiganj", bn: "হবিগঞ্জ", upazilas: [{ en: "Ajmiriganj", bn: "আজমিরীগঞ্জ" }, { en: "Bahubal", bn: "বাহুবল" }, { en: "Baniyachong", bn: "বানিয়াচং" }, { en: "Chunarughat", bn: "চুনারুঘাট" }, { en: "Habiganj Sadar", bn: "হবিগঞ্জ সদর" }, { en: "Lakhai", bn: "লাখাই" }, { en: "Madhabpur", bn: "মাধবপুর" }, { en: "Nabiganj", bn: "নবীগঞ্জ" }] },
        { en: "Moulvibazar", bn: "মৌলভীবাজার", upazilas: [{ en: "Barlekha", bn: "বড়লেখা" }, { en: "Juri", bn: "জুড়ী" }, { en: "Kamalganj", bn: "কমলগঞ্জ" }, { en: "Kulaura", bn: "কুলাউড়া" }, { en: "Moulvibazar Sadar", bn: "মৌলভীবাজার সদর" }, { en: "Rajnagar", bn: "রাজনগর" }, { en: "Sreemangal", bn: "শ্রীমঙ্গল" }] },
        { en: "Sunamganj", bn: "সুনামগঞ্জ", upazilas: [{ en: "Bishwamvarpur", bn: "বিশ্বরম্ভরপুর" }, { en: "Chhatak", bn: "ছাতক" }, { en: "Derai", bn: "দিরাই" }, { en: "Dharampasha", bn: "ধরমপাশা" }, { en: "Dowarabazar", bn: "দোয়ারাবাজার" }, { en: "Jagannathpur", bn: "জগন্নাথপুর" }, { en: "Jamalganj", bn: "জামালগঞ্জ" }, { en: "Sullah", bn: "শাল্লা" }, { en: "Sunamganj Sadar", bn: "সুনামগঞ্জ সদর" }, { en: "Tahirpur", bn: "তাহিরপুর" }, { en: "South Sunamganj", bn: "দক্ষিণ সুনামগঞ্জ" }] },
        { en: "Sylhet", bn: "সিলেট", upazilas: [{ en: "Balaganj", bn: "বালাগঞ্জ" }, { en: "Beanibazar", bn: "বিয়ানীবাজার" }, { en: "Bishwanath", bn: "বিশ্বনাথ" }, { en: "Companiganj", bn: "কোম্পানীগঞ্জ" }, { en: "Fenchuganj", bn: "ফেঞ্চুগঞ্জ" }, { en: "Golapganj", bn: "গোলাপগঞ্জ" }, { en: "Gowainghat", bn: "গোয়াইনঘাট" }, { en: "Jaintiapur", bn: "জৈন্তাপুর" }, { en: "Kanaighat", bn: "কানাইঘাট" }, { en: "Sylhet Sadar", bn: "সিলেট সদর" }, { en: "Zakiganj", bn: "জকিগঞ্জ" }, { en: "South Surma", bn: "দক্ষিণ সুরমা" }, { en: "Osmani Nagar", bn: "ওসমানী নগর" }] }
      ]
    }
  ]
};

export const categories = [
    { id: 'news', en: 'News', bn: 'খবর', icon: 'newspaper', color: '#1abc9c' },
    { id: 'health', en: 'Health', bn: 'স্বাস্থ্য', icon: 'local_hospital', color: '#e74c3c' },
    { id: 'education', en: 'Education', bn: 'শিক্ষা', icon: 'school', color: '#3498db' },
    { id: 'agriculture', en: 'Agriculture', bn: 'কৃষি', icon: 'agriculture', color: '#2ecc71' },
    { id: 'business', en: 'Business', bn: 'ব্যবসা', icon: 'store', color: '#f39c12' },
    { id: 'services', en: 'Services', bn: 'সেবা', icon: 'engineering', color: '#9b59b6' },
    { id: 'weather', en: 'Weather', bn: 'আবহাওয়া', icon: 'cloud', color: '#34495e' },
    { id: 'events', en: 'Events', bn: 'ইভেন্ট', icon: 'event', color: '#e67e22' },
    { id: 'emergency', en: 'Emergency', bn: 'জরুরি সেবা', icon: 'emergency', color: '#c0392b' },
    { id: 'transport', en: 'Transport', bn: 'পরিবহন', icon: 'directions_bus', color: '#2980b9' },
    { id: 'law_admin', en: 'Law & Admin', bn: 'আইন ও প্রশাসন', icon: 'gavel', color: '#8e44ad' },
    { id: 'culture', en: 'Culture', bn: 'সংস্কৃতি', icon: 'theater_comedy', color: '#d35400' },
    { id: 'tourism', en: 'Tourism', bn: 'পর্যটন', icon: 'tour', color: '#16a085' },
    { id: 'tips_ideas', en: 'Tips & Ideas', bn: 'টিপস ও আইডিয়া', icon: 'lightbulb', color: '#f1c40f' },
];

export let posts: Post[] = [
  {
    id: 1,
    titleEn: 'Annual Book Fair Begins in Savar',
    titleBn: 'সাভারে বার্ষিক বইমেলা শুরু',
    descriptionEn: 'The much-awaited annual book fair has started at the central field of Savar, attracting a large number of book lovers. It features hundreds of stalls from various publishers across the country, offering a wide range of books for all ages. The fair will continue for a month, with daily cultural programs and author meet-and-greets scheduled in the evenings.',
    descriptionBn: 'সাভারের কেন্দ্রীয় মাঠে বহু প্রতীক্ষিত বার্ষিক বইমেলা শুরু হয়েছে, যা বিপুল সংখ্যক বইপ্রেমীকে আকর্ষণ করছে। এতে সারাদেশের বিভিন্ন প্রকাশনীর শত শত স্টল রয়েছে, যেখানে সব বয়সের জন্য বিভিন্ন ধরণের বই পাওয়া যাচ্ছে। মেলাটি এক মাসব্যাপী চলবে এবং প্রতিদিন সন্ধ্যায় সাংস্কৃতিক অনুষ্ঠান ও লেখক-পাঠক আড্ডার আয়োজন করা হয়েছে।',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTEyOXwwfDF8c2VhcmNofDR8fGJvb2slMjBmYWlyfGVufDB8fHx8MTcxNTg5MzU4N3ww&ixlib=rb-4.0.3&q=80&w=400',
    category: 'events',
    author: 'Savar Reporter',
    authorId: 'user-2',
    publishDate: '2024-05-20',
    views: 1200, likes: 350, comments: 45,
    status: 'approved'
  },
  {
    id: 2,
    titleEn: 'Free Health Camp in Patiya',
    titleBn: 'পটিয়ায় বিনামূল্যে স্বাস্থ্য ক্যাম্প',
    descriptionEn: 'A day-long free health camp was organized by a local NGO, providing medical services to over 500 people.',
    descriptionBn: 'একটি স্থানীয় এনজিওর উদ্যোগে দিনব্যাপী বিনামূল্যে স্বাস্থ্য ক্যাম্প আয়োজন করা হয়েছে, যেখানে ৫০০ জনেরও বেশি মানুষকে চিকিৎসা সেবা প্রদান করা হয়।',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTEyOXwwfDF8c2VhcmNofDF8fGhlYWx0aCUyMGNhbXB8ZW58MHx8fHwxNzE1ODkzNjM3fDA&ixlib=rb-4.0.3&q=80&w=400',
    category: 'health',
    author: 'Local Health Org',
    authorId: 'user-2',
    publishDate: '2024-05-18',
    views: 2500, likes: 800, comments: 120,
    status: 'approved',
    details: {
        'Organizer': 'Patiya Health Foundation',
        'Services': 'General check-up, blood pressure, diabetes test',
        'Location': 'Patiya Govt. College Field'
    } as {[key: string]: string}
  },
  {
    id: 3,
    titleEn: 'New Training on Modern Farming in Gazipur',
    titleBn: 'গাজীপুরে আধুনিক চাষাবাদে নতুন প্রশিক্ষণ',
    descriptionEn: 'The local agriculture office has started a new training program for farmers on modern cultivation techniques.',
    descriptionBn: 'স্থানীয় কৃষি অফিস আধুনিক চাষাবাদ কৌশল নিয়ে কৃষকদের জন্য একটি নতুন প্রশিক্ষণ কর্মসূচি শুরু করেছে।',
    image: 'https://images.unsplash.com/photo-1563201515-453395603723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTEyOXwwfDF8c2VhcmNofDEwfHxhZ3JpY3VsdHVyZXxlbnwwfHx8fDE3MTU4OTM3MTB8MA&ixlib=rb-4.0.3&q=80&w=400',
    category: 'agriculture',
    author: 'Agriculture Dept.',
    authorId: 'user-2',
    publishDate: '2024-05-15',
    views: 950, likes: 210, comments: 25,
    status: 'approved'
  },
    {
    id: 4,
    titleEn: 'Primary School Scholarship Exam Results Published',
    titleBn: 'প্রাথমিক বিদ্যালয় বৃত্তি পরীক্ষার ফলাফল প্রকাশিত হয়েছে',
    descriptionEn: 'The results of the annual primary school scholarship examination have been published, with a pass rate of 85%.',
    descriptionBn: 'বার্ষিক প্রাথমিক বিদ্যালয় বৃত্তি পরীক্ষার ফলাফল প্রকাশিত হয়েছে, যেখানে পাসের হার ৮৫%।',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjaG9vbCUyMGV4YW18ZW58MHx8MHx8fDA%3D',
    category: 'education',
    author: 'Education Board',
    authorId: 'user-2',
    publishDate: '2024-05-21',
    views: 3100, likes: 950, comments: 150,
    status: 'approved'
  },
  {
    id: 5,
    titleEn: 'Request for local bus route info',
    titleBn: 'স্থানীয় বাস রুটের তথ্য প্রয়োজন',
    descriptionEn: 'Can anyone share the schedule for the bus that goes from Savar to Gazipur in the morning?',
    descriptionBn: 'সকালবেলা সাভার থেকে গাজীপুর যাওয়ার বাসের সময়সূচী কেউ শেয়ার করতে পারবেন?',
    image: '',
    category: 'transport',
    author: 'User',
    authorId: 'user-1',
    publishDate: '2024-05-22',
    views: 0, likes: 0, comments: 0,
    status: 'pending'
  }
];

// Mock user database
export const users: { [key: string]: { id: string; name: string; isAdmin: boolean; email: string; } } = {
    'user@example.com': { id: 'user-1', name: 'User', isAdmin: false, email: 'user@example.com' },
    'admin@example.com': { id: 'admin-1', name: 'Admin', isAdmin: true, email: 'admin@example.com' },
};

export let notifications: any[] = [];

// Mock activity log
export let activityLog = [
    {
        id: 1,
        userId: 'user-1',
        type: 'profile_updated',
        descriptionEn: 'You updated your profile settings.',
        descriptionBn: 'আপনি আপনার প্রোফাইল সেটিংস আপডেট করেছেন।',
        timestamp: new Date('2024-05-23T11:30:00Z'),
    },
    {
        id: 2,
        userId: 'user-1',
        type: 'post_created',
        descriptionEn: 'You created a new post: "Request for local bus route info"',
        descriptionBn: 'আপনি একটি নতুন পোস্ট তৈরি করেছেন: "স্থানীয় বাস রুটের তথ্য প্রয়োজন"',
        timestamp: new Date('2024-05-22T10:00:00Z'),
    },
];

export type UserProfile = {
  id: string;
  name: string;
  lang: 'en' | 'bn';
  avatar?: string;
  darkMode?: boolean;
  isAdmin: boolean;
  location?: {
      division: string;
      district: string;
      upazila: string;
  }
};

export type Post = {
    id: number;
    titleEn: string;
    titleBn: string;
    descriptionEn: string;
    descriptionBn: string;
    image: string;
    category: string;
    author: string;
    authorId: string;
    publishDate: string;
    views: number;
    likes: number;
    comments: number;
    status: 'approved' | 'pending' | 'rejected';
    details?: { [key: string]: string };
};


// --- CATEGORY-SPECIFIC FORM DEFINITIONS ---
export const categoryForms: { [key: string]: { name: string; type: string; labelEn: string; labelBn: string; required: boolean; }[] } = {
    health: [
        { name: 'serviceName', type: 'text', labelEn: "Doctor/Hospital Name", labelBn: "ডাক্তার/হাসপাতালের নাম", required: true },
        { name: 'specialty', type: 'text', labelEn: "Specialty", labelBn: "বিশেষত্ব", required: true },
        { name: 'address', type: 'textarea', labelEn: "Address / Chamber", labelBn: "ঠিকানা / চেম্বার", required: true },
        { name: 'hours', type: 'text', labelEn: "Visiting Hours", labelBn: "দেখার সময়", required: false },
        { name: 'contact', type: 'tel', labelEn: "Contact Number", labelBn: "যোগাযোগের নম্বর", required: false },
        { name: 'image', type: 'url', labelEn: "Image URL (Optional)", labelBn: "ছবির URL (ঐচ্ছিক)", required: false },
    ],
    emergency: [
        { name: 'serviceName', type: 'text', labelEn: "Service Name (e.g., Fire Service)", labelBn: "সেবার নাম (যেমন, ফায়ার সার্ভিস)", required: true },
        { name: 'contact', type: 'tel', labelEn: "Emergency Contact Number", labelBn: "জরুরি যোগাযোগ নম্বর", required: true },
        { name: 'address', type: 'textarea', labelEn: "Address", labelBn: "ঠিকানা", required: false },
        { name: 'hours', type: 'text', labelEn: "Operating Hours", labelBn: "কার্যক্রমের সময়", required: false },
        { name: 'image', type: 'url', labelEn: "Image URL (Optional)", labelBn: "ছবির URL (ঐচ্ছিক)", required: false },
    ],
    transport: [
        { name: 'routeName', type: 'text', labelEn: "Route Name/Number", labelBn: "রুটের নাম/নম্বর", required: true },
        { name: 'startPoint', type: 'text', labelEn: "Starting Point", labelBn: "শুরুর স্থান", required: true },
        { name: 'endPoint', type: 'text', labelEn: "Ending Point", labelBn: "শেষ স্থান", required: true },
        { name: 'fare', type: 'text', labelEn: "Fare", labelBn: "ভাড়া", required: false },
        { name: 'schedule', type: 'textarea', labelEn: "Schedule / Timings", labelBn: "সময়সূচী", required: false },
        { name: 'image', type: 'url', labelEn: "Image URL (Optional)", labelBn: "ছবির URL (ঐচ্ছিক)", required: false },
    ],
    // Default form for other categories
    default: [
        { name: 'title', type: 'text', labelEn: "Title", labelBn: "শিরোনাম", required: true },
        { name: 'description', type: 'textarea', labelEn: "Description", labelBn: "বিবরণ", required: true },
        { name: 'image', type: 'url', labelEn: "Image URL (Optional)", labelBn: "ছবির URL (ঐচ্ছিক)", required: false },
    ]
};
