import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    SAUCEDEMOURL: process.env.URL
}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.USERMEETUP,
    SAUCEDEMOPASS: process.env.PASSMEETUP
}