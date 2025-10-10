const eventData = [
    {
        "id": 1,
        "name": "Lemonade with Lily",
        "date": "2025-11-30",
        "event_time": "12:30:00",
        "image": "https://media.istockphoto.com/id/544468096/photo/lemonade-with-lemon-mint-and-ice.jpg?s=612x612&w=0&k=20&c=XkJqJVWwovEKvCJM7fY59hL_rj7WgH9v_0ZBjflugKA=",
        "description": "Come learn how to make Lily's famous lemonade! Admission is free!",
        "location_id": 1
    },
    {
        "id": 2,
        "name": "Community Garden Day",
        "date": "2025-10-21",
        "event_time": "09:00:00",
        "image": "https://plus.unsplash.com/premium_photo-1663090966558-e62333420712?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbXVuaXR5JTIwZ2FyZGVufGVufDB8fDB8fHww",
        "description": "Join neighbors for a morning of planting and learning sustainable gardening tips.",
        "location_id": 1
    },
    {
        "id": 3,
        "name": "Trivia Night at The Rabbit Hole",
        "date": "2025-11-15",
        "event_time": "19:00:00",
        "image": "https://thesandiegosun.com/wp-content/uploads/2024/03/AdobeStock_281657380-1024x766.jpeg",
        "description": "Bring your friends and test your knowledge! Prizes for the top teams.",
        "location_id": 2
    },
    {
        "id": 4,
        "name": "Morning Yoga in the Park",
        "date": "2025-10-19",
        "event_time": "08:30:00",
        "image": "https://www.peopleforpalmerpark.org/uploads/2/9/3/5/29354385/pfpp-yoga-barefield_orig.jpg",
        "description": "Start your day refreshed with an outdoor yoga session. Beginners welcome.",
        "location_id": 3
    },
    {
        "id": 5,
        "name": "Art in the Alley",
        "date": "2025-11-02",
        "event_time": "14:00:00",
        "image": "https://media2.kshb.com/photo/2017/04/03/ART_ALLEY_1_1491237308818_57727305_ver1.0_640_480.jpg",
        "description": "Local artists showcase their work with live music and food trucks.",
        "location_id": 4
    },
    {
        "id": 6,
        "name": "Pumpkin Carving Contest",
        "date": "2025-10-25",
        "event_time": "16:00:00",
        "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F53cc592da57bec2a2a053516902461651a865cac_da5d11-horizontal-crop",
        "description": "Show off your carving skills! Tools provided, bring your own pumpkin.",
        "location_id": 3
    },
    {
        "id": 7,
        "name": "Family Movie Night",
        "date": "2025-11-08",
        "event_time": "18:30:00",
        "image": "https://m.media-amazon.com/images/I/81C5A5waXfL._UF1000,1000_QL80_.jpg",
        "description": "Bring a blanket and enjoy a family-friendly movie under the stars.",
        "location_id": 1
    },
    {
        "id": 8,
        "name": "Coffee & Code Meetup",
        "date": "2025-11-13",
        "event_time": "10:00:00",
        "image": "https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg",
        "description": "A casual meetup for local developers to share projects and ideas over coffee.",
        "location_id": 4
    },
    {
        "id": 9,
        "name": "Holiday Craft Workshop",
        "date": "2025-12-05",
        "event_time": "13:00:00",
        "image": "https://s3.amazonaws.com/media.splashway.com/wp-content/uploads/2019/02/10185239/diy-christmas-trees.jpg",
        "description": "Make personalized holiday decorations with local artists.",
        "location_id": 1
    },
    {
        "id": 10,
        "name": "Cooking with the Community",
        "date": "2025-11-20",
        "event_time": "17:30:00",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45oPBJNCRuc4ku96Do4FiWypf95xD8s4pVA&s",
        "description": "Learn simple and healthy recipes in this hands-on cooking class.",
        "location_id": 2
    },
    {
        "id": 11,
        "name": "Local History Walk",
        "date": "2025-10-26",
        "event_time": "10:00:00",
        "image": "https://www.bulldogtours.com/cdn-cgi/image/format=auto,width=800,height=582,quality=75,fit=crop/assets/images/tours/hero/12.jpg",
        "description": "Take a guided tour through the town’s historic district and learn its stories.",
        "location_id": 3
    },
    {
        "id": 12,
        "name": "Pet Adoption Fair",
        "date": "2025-11-09",
        "event_time": "11:00:00",
        "image": "https://www.petplace.com/pet-adoption/media_1740aa105bbc41052f254093d1112ead04d221c37.jpeg?width=750&format=jpeg&optimize=medium",
        "description": "Meet adorable pets looking for their forever homes!",
        "location_id": 1
    },
    {
        "id": 13,
        "name": "Book Swap & Chat",
        "date": "2025-11-12",
        "event_time": "15:00:00",
        "image": "https://thedollarbookswap.com/cdn/shop/files/DSC00859.jpg?v=1688399063&width=1500",
        "description": "Trade your favorite books and enjoy a cozy afternoon with fellow readers.",
        "location_id": 2
    },
    {
        "id": 14,
        "name": "Sunset Photography Walk",
        "date": "2025-10-27",
        "event_time": "17:45:00",
        "image": "https://i.redd.it/i3621y1kxuw51.jpg",
        "description": "Join local photographers to capture the sunset over Adams Avenue.",
        "location_id": 3
    },
    {
        "id": 15,
        "name": "Winter Warm-Up Charity Run",
        "date": "2025-12-10",
        "event_time": "08:00:00",
        "image": "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/FbOXaCWxwuI975XgxlDms/1d9bc48af213a35b62fa2dc8a1dbb362/Running_Marathon.jpg",
        "description": "Run for a cause! All proceeds go toward local shelters and food banks.",
        "location_id": 3
    }
]

export default eventData