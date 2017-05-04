class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create


    respond_to do |format|

      format.html do
        if request.xhr?
        end
      end


    end
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      redirect_to tweets_path
    else
      render :index
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
