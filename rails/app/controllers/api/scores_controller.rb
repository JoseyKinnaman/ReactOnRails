# Hello, curious developer. This file is here only to simulate a server's
# responses for the React exercise elsewhere in this repo. Please ignore this
# code. We know it's weird.

module Api
  class ScoresController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      render json: [
        {
          firstName: 'The',
          lastName: 'Temp',
          score: 10
        },
        {
          firstName: 'Michael',
          lastName: 'Scott',
          score: 94
        },
        {
          firstName: 'Toby',
          lastName: 'Flenderson',
          score: 73
        },
        {
          firstName: 'Pam',
          lastName: 'Beasley',
          score: 90
        },
        {
          firstName: 'Jim',
          lastName: 'Halpert',
          score: 89
        },
        {
          firstName: 'Creed',
          lastName: 'Bratton',
          score: 56
        }
      ]
    end

    def create
      if rand(5).zero?
        render json: {
          error: 'Temporary server failure. Please try again.'
        }, status: :service_unavailable
      elsif params[:score].to_i > 100
        render json: {
          error: "#{params[:score]} is greater than 100 and is too high."
        }, status: :unprocessable_entity
      else
        render json: {
          firstName: params[:firstName],
          lastName: params[:lastName],
          score: params[:score]
        }
      end
    end
  end
end
