class LevelsController < ApplicationController
    def index
        levels = Level.all 
        render json: levels
    end
end
