class ItemsController < ApplicationController
  before_action :set_item, only: %i[edit update destroy]

  def create
    @list = List.find(params[:list_id])
    @item = @list.items.create params[:item].permit(:content)
  end

  def edit;
    @item = Item.find(params[:id])
  end

  def update
    @item.update_attributes(params[:item].permit(:content))
  end

  def update_items
    @item.update_attributes(params[:item].permit(:content))
  end

  def destroy
    @item.destroy
  end

  # def bulk_destroy
  #   Item.where(id: params[:collection_ids]).destroy_all
  #   redirect_to root_path
  # end

  private

  def set_item
    @item = Item.where(id: params[:id]).first!
  end
end
