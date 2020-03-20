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
                message: "Missing name or password"
                }, status: 204
        end
     
    end
end

@user = User.new(user_params)
if @user.valid?
    @user.save
    session[:user_id] = @user.id
    redirect_to user_path(@user)
else
    render :new
end