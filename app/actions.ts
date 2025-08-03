"use server"

import { supabaseAdmin } from "@/lib/supabase/server"

// This base count fulfills the requirement to start from a specified initial value.
const BASE_WAITLIST_COUNT = 5182

export async function joinWaitlist(contact: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // A simple regex to validate phone numbers (allows for optional +, digits, spaces, and hyphens)
  const phoneRegex = /^\+?[0-9\s-]{10,15}$/

  const isEmail = emailRegex.test(contact)
  const isPhone = phoneRegex.test(contact)

  if (!isEmail && !isPhone) {
    return { success: false, message: "Please enter a valid email or phone number." }
  }

  let insertData = {}
  if (isEmail) {
    insertData = { email: contact }
  } else {
    // Sanitize phone number by removing spaces and hyphens for consistent storage
    const sanitizedPhone = contact.replace(/[\s-]/g, "")
    insertData = { phone: sanitizedPhone }
  }

  try {
    const { error } = await supabaseAdmin.from("waitlist").insert(insertData)

    if (error) {
      // Handle unique constraint violation (duplicate email or phone)
      if (error.code === "23505") {
        return { success: true, message: "You are already on the waitlist. Thank you!" }
      }
      console.error("Supabase error:", error)
      throw new Error(error.message)
    }

    return { success: true, message: "Thank you for joining the waitlist!" }
  } catch (e) {
    const err = e as Error
    return { success: false, message: err.message || "An unexpected error occurred." }
  }
}

export async function getWaitlistCount() {
  try {
    // Fetch the count of entries from the waitlist table. This counts all rows,
    // so it works for both emails and phones.
    const { count, error } = await supabaseAdmin.from("waitlist").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Supabase error:", error)
      throw new Error(error.message)
    }

    // Return the actual count from the database plus the base value
    return { success: true, count: (count ?? 0) + BASE_WAITLIST_COUNT }
  } catch (e) {
    const err = e as Error
    return { success: false, message: err.message || "Could not fetch waitlist count." }
  }
}
