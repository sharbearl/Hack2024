import streamlit as st

def calculate_progress(val):
	return (100/11)*val 

def update_progress(choice, water_bar, mid):
	water_progress = calculate_progress(choice)
	if water_progress < 100:
		water_bar.progress(water_progress/100, text="Water")
	else:
		water_bar.progress(100, text="Nice! You've drank the recommended amount of water!")
		img = "happyanteater.png"
		mid.empty()
		mid.image(img, width=300)


if __name__ == "__main__":

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
			water_val = st.number_input(label = "Adjust water", min_value = 0, step = 1)
			update_progress(water_val, water_bar, mid)
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
	if option == "Bulk":
		st.progress(0, text = "Calorie Count")
	elif option == "Cut":
		st.progress(0, text = "Calorie Count")
	else:
		st.progress(0, text = "Calorie Count")
	# USER INPUT + VARIABLE STORING
	# weight = st.text_input("Enter some text")
	form = st.form("Water")
	with st.sidebar:
		st.title("ABOUT")
		st.text("BOO")
