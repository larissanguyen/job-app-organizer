class Api::V1::CauseJobController < ApplicationController
	def index
		causeJobs = CauseJob.all
		render json: causeJobs
	end

	def create
        causeJob = CauseJob.create(causeJob_params)
        render json: causeJob
	end

	def update
        causeJob = CauseJob.find(params[:id])
        causeJob.update(causeJob_params)
        render json: causeJob
    end

    def destroy
        causeJob = CauseJob.find(params[:id])
        causeJob.destroy
        render json: "CauseJob deleted!"
    end

	private

	def causeJob_params
		params.require(:causeJob).permit(:cause_id, :job_id)
	end
end
