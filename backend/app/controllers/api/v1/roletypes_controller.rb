class Api::V1::RoletypesController < ApplicationController
	def show
		roletype = Roletype.find(params[:id])
		render json: roletype
	end
end
