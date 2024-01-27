import streamlit as st

def calculate_progress(val):
	return (100/11)*val 

def update_progress(choice, water_bar):
	water_progress = calculate_progress(choice)
	st.text(water_progress)
	if water_progress < 100:
		water_bar = st.progress(1, text="Water")


if __name__ == "__main__":

	col1, col2, col3, col4, col5 = st.columns(5)
	
	water_text = "Water"
	water_bar = st.progress(0, text=water_text)
	
	with col1.expander("Home"):
	  st.write("this is a test")
	
	with col2.expander("Water Log"):
	  # choice = st.number_input(label = "Adjust water", step = 1)
	  st.write("this is a test")
	  
	with col3.expander("Food Log"):
	  st.write("this is a test")
	  
	with col4.expander("Exercise Log"):
	  st.write("this is a test")
	
	# water_checkbox = col5.checkbox("Water check")
	  
	water_expander = col5.expander("Water log")
	if (water_expander):
	    water_val = st.number_input(label = "Adjust water", min_value = 0, step = 1)
	    update_progress(water_val, water_bar)
	    st.write("this is a test")
	
	# USER INPUT + VARIABLE STORING
	# weight = st.text_input("Enter some text")
	form = st.form("Water")
	with st.sidebar:
		st.title("ABOUT")
		st.text("BOO")
	
	st.image("cup.png")
