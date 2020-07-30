class Api::V1::CompaniesController < ApplicationController
	def index
		companies = Company.all
		render json: companies
	end

	def show
		company = Company.find(params[:id])
		render json: company
	end

	def create
        company = Company.create(company_params)
        render json: company
	end

	def update
        company = Company.find(params[:id])
        company.update(company)
        render json: company
    end

    def destroy
        company = Company.find(params[:id])
        company.destroy
        render json: "Company deleted!"
    end

	private

	def company_params
		params.require(:company).permit(:name, :description, :link)
	end
end
