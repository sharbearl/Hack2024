import streamlit as st

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
water_expander = col5.expander("Water log")
print("TEST PRINT")
if (water_expander):
    choice = st.number_input(label = "Adjust water", step = 1)
    st.write("this is a test")

# USER INPUT + VARIABLE STORING
# weight = st.text_input("Enter some text")

# choice = st.number_input(label = "Adjust water", step = 1)
st.image("cup.png")
