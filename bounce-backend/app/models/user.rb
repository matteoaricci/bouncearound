class User < ApplicationRecord
    has_many :gameplays
    has_many :levels, through: :gameplays
    has_secure_password
    validates :name, presence: true, uniqueness: {case_sensitive: false}
end
