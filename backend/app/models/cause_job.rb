class CauseJob < ApplicationRecord
	belongs_to :cause
	belongs_to :job

	# def index
	# 	jobCause = causeJob.all
	# 	render json: causes
	# end

	# def show
	# 	cause = Cause.find(params[:id])
	# 	render json: cause
	# end

	# def create
 #        cause = Cause.create(cause_params)
 #        render json: cause
	# end

	# def update
 #        cause = Cause.find(params[:id])
 #        cause.update(cause_params)
 #        render json: cause
 #    end

 #    def destroy
 #        cause = Cause.find(params[:id])
 #        cause.destroy
 #        render json: "Cause deleted!"
 #    end

	# private

	# def cause_params
	# 	params.require(:cause).permit(:name)
	# end
end
