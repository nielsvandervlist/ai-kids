import axios from 'axios'
// @ts-ignore
import { Router } from 'ra-fetch'

export const Client = axios.create({
    withCredentials: true,
})

// @ts-ignore
Router.baseURL(process.env.NEXT_PUBLIC_BACKEND_URL)
    .axiosClient(Client)
    .laravel()
    .csrfURL('/sanctum/csrf-cookie')
    .loginURL('/login')
    .logoutURL('/logout')

    // User
    .show('user', '/api/user')
    .update('user', '/api/user')

    // Password
    .store('password.forgot', '/forgot-password')
    .store('password.reset', '/reset-password')
    .store('password.update', '/update-password')

    // Email
    .store('email.verify', '/email/verify')
    .store('email.notice', '/email/verification-notification')

    // Register
    .store('register', '/register')

    //Search
    .index('search', '/api/search')

    // Databases
    .index('questions', '/api/questions')
    .show('questions', '/api/questions/{id}')
    .store('questions', '/api/questions', {form_data: true})
    .update('questions', '/api/questions/{id}', {form_data: true})

    // Databases
    .index('missions', '/api/missions')
    .show('missions', '/api/missions/{id}')
    .store('missions', '/api/missions', {form_data: true})
    .update('missions', '/api/missions/{id}', {form_data: true})

    // Databases
    .index('choices', '/api/choices')
    .show('choices', '/api/choices/{id}')
    .store('choices', '/api/choices', {form_data: true})
    .update('choices', '/api/choices/{id}', {form_data: true})

    // Tables
    .index('schemas', '/api/schemas')
    .show('schemas', '/api/schemas')
