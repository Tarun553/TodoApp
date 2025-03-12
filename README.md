# Todo Application - Update Feature

## Update Todo Controller

This controller handles the update functionality for todo items in the application.

### Features
- Updates existing todo items by ID
- Supports modification of title and description
- Implements error handling and status codes
- Returns updated todo data in response

### Technical Details
- Route: PUT /updateTodo/:id
- Controller: updateTodo.js
- Model: Todo

### Request Format
```json
{
    "title": "Updated Todo Title",
    "description": "Updated Todo Description"
}
