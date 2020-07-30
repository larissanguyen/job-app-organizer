class Api::V1::JobsController < ApplicationController
	def index
		jobs = Job.all
		render json: jobs
	end

	def show
		job = Job.find(params[:id])
		render json: job
	end

	def create
        job = Job.create(job_params)
        render json: job
	end

	def update
        job = Job.find(params[:id])
        job.update(job_params)
        render json: job
    end

    def destroy
        job = Job.find(params[:id])
        job.destroy
        render json: "Job deleted!"
    end

	private

	def job_params
		params.require(:job).permit(:title, :description, :link)
	end
end
