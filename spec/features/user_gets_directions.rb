require 'spec_helper'

describe "getting directions", :js => true  do
  it "displays the start address" do
    visit root_path
    within('#addresses') do
      fill_in 'start', :with => '24 S. Kingman Rd., S. Orange, NJ'
    end
    click_button 'Submit'
    expect(page).to have_content('24 S. Kingman Rd., S. Orange, NJ')
  end

  it "displays the end address" do
    visit root_path
    within('#addresses') do
      fill_in 'finish', :with => '10 E. 21 St., New York, NY'
    end
    click_button 'Submit'
    expect(page).to have_content('10 E. 21 St., New York, NY')
  end

  it "displays the directions" do
    visit root_path
    within('#addresses') do
      fill_in 'start', :with => '24 S. Kingman Rd., S. Orange, NJ'
      fill_in 'finish', :with => '10 E. 21 St., New York, NY'
    end
    click_button 'Submit'
    expect(page).to have_content('24 Kingman Road South')
  end
end
