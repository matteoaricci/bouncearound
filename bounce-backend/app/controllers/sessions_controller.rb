class SessionsController < ApplicationController

    def create_user_login
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            render json: user
        else
            render json: {
            message: "No user found"
            }, status: 204
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