USE calvary_church;

CREATE TABLE prayer_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) DEFAULT NULL,
    prayer_request TEXT NOT NULL,
    is_secret BOOLEAN DEFAULT FALSE,
    allow_contact BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

