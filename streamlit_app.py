import streamlit as st

def calculate_progress_water(val):
	return (100/11)*val 

def update_progress_water(choice, water_bar, mid):
	water_progress = calculate_progress_water(choice)
	if water_progress < 100:
		water_bar.progress(water_progress/100, text="Water")
	else:
		water_bar.progress(100, text="Nice! You've drank the recommended amount of water!")
		img = "happyanteater.png"
		mid.empty()
		mid.image(img, width=300)
def calc_prog_calorie_bulk(calorie):
	return calorie * (100/3500)
def calc_prog_calorie_cut(calorie):
	return calorie * (100/1700)
def calc_prog_calorie(calorie):
	return calorie * (100/2000)

def update_prog_calorie(calorie, calorie_bar, type, mid):
	if type == "Bulk":
		percentage = calc_prog_calorie_bulk(calorie)
	elif type == "Cut":
		percentage = calc_prog_calorie_cut(calorie)
	else:
		percentage = calc_prog_calorie(calorie)
		
def toggleflag(flag):
	if flag == True:
		flag = False
	else:
		flag = True
	
if __name__ == "__main__":
	flag_water = False
	col1, col2, col3, col4 = st.columns(4)
	_left, mid, _right = st.columns(3)
	img = "thirstyanteater.png"
	
	mid.image(img, width=300)		
		
	water_text = "Water"
	water_bar = st.progress(0, text=water_text)
	
	with col1.expander("Home"):
	  st.write("this is a test")
	
	with col2:
		switch = st.button("Water Log")
	  # choice = st.number_input(label = "Adjust water", step = 1)
		if switch:
			toggleflag(flag_water)
			
		if flag_water == True:
			water_val = st.number_input(label = "Adjust water", min_value = 0, step = 1)
			update_progress_water(water_val, water_bar, mid)
		else:
			water_bar.empty()
	  
	with col3.expander("Food Log"):
	  st.write("this is a test")
	  
	with col4.expander("Exercise Log"):
	  st.write("this is a test")
	
	# water_checkbox = col5.checkbox("Water check")
	  
	#water_expander = col5.expander("Water log")
	
	# water_val = st.number_input(label = "Adjust water", min_value = 0, step = 1)
	# update_progress(water_val, water_bar, mid)
	option = st.selectbox(label = "Food Calorie Tracking", options = ["Bulk", "Cut", "Neither"])
	calorie_bar = st.progress(0, text = "Calorie Count")
	if option == "Bulk":
		calorie_bar.empty()
	elif option == "Cut":
		calorie_bar.empty()
	else:
		calorie_bar.empty()
	# USER INPUT + VARIABLE STORING
	# weight = st.text_input("Enter some text")
	form = st.form("Water")
	with st.sidebar:
		st.title("ABOUT")
		st.text("BOO")
