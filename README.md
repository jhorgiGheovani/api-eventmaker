# API EventMaker

## Development

```bash
npm install
npm run dev
```

```bash
open http://localhost:3000
```

---

## API Documentation

### Base URL

```
https://api-eventmaker.createdbyjhorgi.com
```

## Endpoints

### Events

#### 1. Get All Events

Ambil semua data event beserta participants-nya.

**Endpoint:**

```
GET /events
```

**Response:**

```json
{
  "event": [
    {
      "id": "cm5vk8j3s0000mg08abc123",
      "name": "DevScale Bootcamp Batch 10",
      "description": "Bootcamp intensif untuk jadi developer handal",
      "location": "Jakarta",
      "dateTime": "2026-01-15T10:00:00Z",
      "participants": [
        {
          "id": "cm5vk8j3s0001mg08xyz456",
          "name": "John Doe",
          "email": "john@example.com",
          "eventId": "cm5vk8j3s0000mg08abc123"
        }
      ]
    }
  ]
}
```

---

#### 2. Get Event by ID

Ambil detail event spesifik berdasarkan ID.

**Endpoint:**

```
GET /events/:id
```

**Parameters:**

- `id` (path parameter) - Event ID

**Response:**

```json
{
  "event": {
    "id": "cm5vk8j3s0000mg08abc123",
    "name": "DevScale Bootcamp Batch 10",
    "description": "Bootcamp intensif untuk jadi developer handal",
    "location": "Jakarta",
    "dateTime": "2026-01-15T10:00:00Z",
    "participants": [
      {
        "id": "cm5vk8j3s0001mg08xyz456",
        "name": "John Doe",
        "email": "john@example.com",
        "eventId": "cm5vk8j3s0000mg08abc123"
      }
    ]
  }
}
```

---

#### 3. Create Event

Bikin event baru.

**Endpoint:**

```
POST /events
```

**Request Body:**

```json
{
  "name": "Tech Conference 2026",
  "description": "Konferensi teknologi terbesar tahun ini",
  "location": "Bandung",
  "dateTime": "2026-03-20T09:00:00Z"
}
```

**Validation:**

- `name`: Required, minimal 1 karakter
- `description`: Required, minimal 1 karakter
- `location`: Required, minimal 1 karakter
- `dateTime`: Required, minimal 1 karakter

**Response:**

```json
{
  "event": {
    "id": "cm5vk8j3s0002mg08new789",
    "name": "Tech Conference 2026",
    "description": "Konferensi teknologi terbesar tahun ini",
    "location": "Bandung",
    "dateTime": "2026-03-20T09:00:00Z"
  }
}
```

---

#### 4. Update Event

Update data event yang udah ada.

**Endpoint:**

```
PATCH /events/:id
```

**Parameters:**

- `id` (path parameter) - Event ID

**Request Body (semua field opsional):**

```json
{
  "name": "Tech Conference 2026 - Updated",
  "description": "Konferensi teknologi dengan speaker internasional",
  "location": "Jakarta Convention Center",
  "dateTime": "2026-03-25T10:00:00Z"
}
```

**Validation:**

- Semua field opsional
- Kalau ada, minimal 1 karakter untuk setiap field

**Response:**

```json
{
  "event": {
    "id": "cm5vk8j3s0002mg08new789",
    "name": "Tech Conference 2026 - Updated",
    "description": "Konferensi teknologi dengan speaker internasional",
    "location": "Jakarta Convention Center",
    "dateTime": "2026-03-25T10:00:00Z"
  }
}
```

---

#### 5. Delete Event

Hapus event.

**Endpoint:**

```
DELETE /events/:id
```

**Parameters:**

- `id` (path parameter) - Event ID

**Response:**

```json
{
  "message": "Event deleted successfully"
}
```

---

### Participants

#### 1. Get All Participants

Ngambil semua data participant.

**Endpoint:**

```
GET /participants
```

**Response:**

```json
{
  "participants": [
    {
      "id": "cm5vk8j3s0001mg08xyz456",
      "name": "John Doe",
      "email": "john@example.com",
      "eventId": "cm5vk8j3s0000mg08abc123"
    },
    {
      "id": "cm5vk8j3s0003mg08xyz789",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "eventId": "cm5vk8j3s0000mg08abc123"
    }
  ]
}
```

---

#### 2. Get Participant by ID

Ambil detail participant spesifik berdasarkan ID, termasuk info event-nya.

**Endpoint:**

```
GET /participants/:id
```

**Parameters:**

- `id` (path parameter) - Participant ID

**Response:**

```json
{
  "participant": {
    "id": "cm5vk8j3s0001mg08xyz456",
    "name": "John Doe",
    "email": "john@example.com",
    "eventId": "cm5vk8j3s0000mg08abc123",
    "event": {
      "id": "cm5vk8j3s0000mg08abc123",
      "name": "DevScale Bootcamp Batch 10",
      "description": "Bootcamp intensif untuk jadi developer handal",
      "location": "Jakarta",
      "dateTime": "2026-01-15T10:00:00Z"
    }
  }
}
```

---

#### 3. Create Participant

Daftarin participant baru ke event.

**Endpoint:**

```
POST /participants
```

**Request Body:**

```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "eventId": "cm5vk8j3s0000mg08abc123"
}
```

**Validation:**

- `name`: Required, minimal 1 karakter
- `email`: Required, harus format email yang valid
- `eventId`: Required, minimal 1 karakter

**Response:**

```json
{
  "participant": {
    "id": "cm5vk8j3s0004mg08new111",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "eventId": "cm5vk8j3s0000mg08abc123"
  }
}
```

---

#### 4. Update Participant

Update data participant yang udah ada.

**Endpoint:**

```
PATCH /participants/:id
```

**Parameters:**

- `id` (path parameter) - Participant ID

**Request Body (semua field opsional):**

```json
{
  "name": "Alice Johnson Updated",
  "email": "alice.new@example.com",
  "eventId": "cm5vk8j3s0002mg08new789"
}
```

**Validation:**

- Semua field opsional
- Kalau ada `email`, harus format email yang valid
- Kalau ada field lain, minimal 1 karakter

**Response:**

```json
{
  "participant": {
    "id": "cm5vk8j3s0004mg08new111",
    "name": "Alice Johnson Updated",
    "email": "alice.new@example.com",
    "eventId": "cm5vk8j3s0002mg08new789"
  }
}
```

---

#### 5. Delete Participant

Hapus participant dari event.

**Endpoint:**

```
DELETE /participants/:id
```

**Parameters:**

- `id` (path parameter) - Participant ID

**Response:**

```json
{
  "message": "Participant deleted successfully"
}
```
