require 'spec_helper'

describe "getting directions"  do
  it "displays the starting" do
    visit root_path
    within('#addresses') do
      fill_in 'start', :with => '24 S. Kingman Rd., S. Orange, NJ'
      fill_in 'finish', :with => '10 E. 21 St., New York, NY'
    end
    click_button 'Submit'
    expect('#directionsPanel').to have_content
  end
end
