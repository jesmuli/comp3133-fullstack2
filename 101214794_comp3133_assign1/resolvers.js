const Hotel = require('./models/Hotel');
const HotelBooking = require('./models/HotelBooking');
const HotelUser = require('./models/HotelUser');

exports.resolvers = {
    Query: {
        getHotels: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelName: async (parent, args) => {
            console.log(args)
            return await Hotel.find({"hotel_name" : args.hotel_name});
        },
        getHotelCity: async (parent, args) => {
            console.log(args)
            return await Hotel.find({"city" : args.city});
        },

        getBookings: async (parent, args) => {
            return await HotelBooking.find({});
        },
    },


    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)
            
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase())
            
            if(!isValidEmail){
                throw new Error("email not in proper format")
            }
            
            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email
            });
            return await newHotel.save();
        },

        addBooking: async (parent, args) => {
            console.log(args)
            
            let newBooking = new HotelBooking({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
            });
            return await newBooking.save();
        },

        addUser: async (parent, args) => {
            console.log(args)
            
            let newUser = new HotelUser({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });
            return await newUser.save();
        }
    }
}


/* QUERIES */

/* 1. CREATE HOTEL
mutation {
  addHotel (
    hotel_id: 1,
    hotel_name: "Hilton Inn",
    street: "Young Street",
    city: "Toronto",
    postal_code: "M1X0Y5",
    price:150,
    email: "contact@hilton.com"
  ) {
    hotel_id
  }
}

/* 2. LIST ALL HOTELS
query {
  getHotels {
    hotel_id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

/* 3. BOOK HOTELS
mutation {
  addBooking (
    hotel_id: 1,
    booking_date: "01-24-2023",
    booking_start: "01-25-2021",
    booking_end: "01-30-2021",
    user_id: 4
  ) {
    hotel_id
    booking_date
    booking_start
    booking_end
    user_id
  }
}

/* 4. SEARCH HOTEL BY NAME
query {
  getHotelName (hotel_name: "Hilton Inn") {
    hotel_id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

/* 5. SEARCH HOTEL BY CITY
query {
  getHotelCity (city: "Toronto") {
    hotel_id
    hotel_name
    street
    city
    postal_code
    price
    email
  }
}

/* 6. LIST ALL BOOKINGS
query {
  getBookings {
    hotel_id
    booking_date
    booking_start
    booking_end
    user_id
  }
}

/* 7. CREATE USER PROFILE
mutation {
  addUser (
    user_id: 1,
    username: "pritamworld",
    password: "test123",
    email: "p@p.com"
  ) {
    user_id
    username
    password
    email
  }
}

*/
