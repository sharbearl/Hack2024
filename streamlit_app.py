import streamlit as st
water_val = 0

col1, col2, col3, col4, col5 = st.columns(5)

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

def update():
  water_val = water_val + 1
  update_progress()
  
water_expander = col5.expander("Water log")
print("TEST PRINT")
if (water_expander):
    choice = st.number_input(label = "Adjust water", min_value = 0, step = 1, on_change = update)
    st.write("this is a test")

# USER INPUT + VARIABLE STORING
# weight = st.text_input("Enter some text")

# choice = st.number_input(label = "Adjust water", step = 1)
st.image("cup.png")

water_text = "Water"
water_bar = st.progress(0, text=water_test)
def update_progress():
  water_bar.progress(water_val + 1, text=water_text)
