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



    def update
        user = User.find(params[:id])

        current_level = params[:current_level]
        user.update(current_level: current_level)
        resp json: user
    end

end

