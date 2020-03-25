class SessionsController < ApplicationController

    def create_user_login
        user = User.find_by(name: params[:name])
        name = params[:name]
        cap_name = name.titleize
        low_name = name.downcase
        user_cap = User.find_by(name: cap_name)
        user_low = User.find_by(name: low_name)
        if user && user.authenticate(params[:password])
            render json: user
        elsif user_cap && user_cap.authenticate(params[:password])
            render json: user_cap
        elsif user_low && user_low.authenticate(params[:password])
            render json: user_low
        else 
            render json: {
                message: "No user found with those credentials"
                 }
        end
    end

end

# user = User.find_by(username: params[:username])
# if user && user.authenticate(params[:password])
#   session[:user_id] = user.id
#   redirect_to user_path(user)
# else
#   flash[:notice] = "Username and password combination invalid."
#   render :new_user_login
# end