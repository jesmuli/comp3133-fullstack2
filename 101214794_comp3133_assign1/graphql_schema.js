const { gql } = require('apollo-server-express');


// GraphQL schema
exports.typeDefs = gql `
    type Query {
        getHotels: [Hotel]
        getHotelName(hotel_name: String!): [Hotel]
        getHotelCity(city: String!): [Hotel]

        getBookings: [Booking]
        getUsers: [User]

    },
    type Mutation {
     addHotel(
     	hotel_id: Int!,
        hotel_name: String!,
        street: String!,
        city: String!,
        postal_code: String!,
        price: Int!,
        email: String!
        ): Hotel

     addBooking(
        hotel_id: Int!,
        booking_date: String!,
        booking_start: String!,
        booking_end: String!,
        user_id: Int!
        ): Booking

     addUser(
        user_id: Int!,
        username: String!,
        password: String!,
        email: String!
        ): User
    },

    type Hotel {
        hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Int!
        email: String!
    },
    type Booking {
        hotel_id: Int!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Int!
    },
	type User {
    	user_id: Int!
    	username: String!
    	password: String!
    	email: String!
	}
`
