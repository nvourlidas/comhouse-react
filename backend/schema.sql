-- Run this in phpMyAdmin on the `comhouse` database

CREATE TABLE IF NOT EXISTS admins (
    id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username      VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at    DATETIME     NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS admin_sessions (
    id         INT UNSIGNED NOT NULL AUTO_INCREMENT,
    admin_id   INT UNSIGNED NOT NULL,
    token      CHAR(64)     NOT NULL UNIQUE,
    expires_at DATETIME     NOT NULL,
    created_at DATETIME     NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS articles (
    id           INT UNSIGNED                NOT NULL AUTO_INCREMENT,
    title        VARCHAR(255)                NOT NULL,
    slug         VARCHAR(255)                NOT NULL UNIQUE,
    excerpt      TEXT                                 DEFAULT NULL,
    content      LONGTEXT                    NOT NULL,
    image        VARCHAR(255)                         DEFAULT NULL,
    status       ENUM('draft','published')   NOT NULL DEFAULT 'draft',
    published_at DATETIME                             DEFAULT NULL,
    created_at   DATETIME                    NOT NULL,
    updated_at   DATETIME                    NOT NULL,
    PRIMARY KEY (id),
    KEY idx_slug   (slug),
    KEY idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE promotions (
    id         INT UNSIGNED  AUTO_INCREMENT PRIMARY KEY,
    filename   VARCHAR(255)  NOT NULL,
    sort_order INT UNSIGNED  NOT NULL DEFAULT 0,
    created_at TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);
