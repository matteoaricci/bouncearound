class UsersController < ApplicationController

    def index
        users = User.all 
        render json: users
    end

    def create
        user = User.new(name: params[:name], current_level: 1, password: params[:password])   
        if user.valid?
            user.save
            render json: user
        else
            render json: {
                message: user.errors.full_messages
                 }
        end
    end

    def find_user
        user = User.find(params[:id])
        render json: user
    end

end

