class Level < ApplicationRecord
    has_many :gameplays
    has_many :users, through: :gameplays
    
end
