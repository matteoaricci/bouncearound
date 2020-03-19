class User < ApplicationRecord
    has_many :sessions
    has_many :levels, through: :sessions
    has_secure_password
end
