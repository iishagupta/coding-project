# Calendar Booking API Documentation

## Overview
This API provides a flexible calendar booking system with user-specific availability and event management.

## Endpoints

### User Management
- **Create User**
  - `POST /user`
  - Creates a new user with default empty and available slots
  - Response: User details with a unique user ID

### Slot Management
- **Get Available Slots**
  - `GET /:userId/get-slots`
  - Retrieves available slots for a specific user
  - Query Parameters:
    - `startTime`: Beginning of the time range
    - `endTime`: End of the time range
  - Response: List of available time slots

- **Set User Availability**
  - Restricted to the user themselves
  - Allows setting personal available time slots

### Event Booking
- **Book a Slot**
  - Booking process with intelligent conflict checking:
    1. Validates if the requested slot is within user's availability
    2. Checks for existing event conflicts
    3. Provides warning if conflicts exist
    4. Allows booking even with conflicts

- **Get Existing Slots**
  - `GET /:userId/slots`
  - Retrieves all existing booked slots for a user

- **Cancel Event**
  - Allows cancellation of a specific event for a user

- **Event Acceptance**
  - `PATCH /:userId/accept-event/:eventId`
  - Allows user to accept or reject a proposed event
  - User receives a notification (future implementation)

### Conflict Management
- **Check User Conflicts**
  - Identifies and reports scheduling conflicts between two users

## Booking Logic Details
- Slot booking checks:
  - Validates slot against user's availability
  - Detects scheduling conflicts
  - Provides conflict warnings
  - Allows flexible booking with user consent

## Future Enhancements
- Notification system for event requests
- Timezone management
- More granular conflict resolution

## Note
- Conflict handling allows flexibility while maintaining user control

## Postman Doc URL
- https://documenter.getpostman.com/view/21104624/2sAYBViBrF
