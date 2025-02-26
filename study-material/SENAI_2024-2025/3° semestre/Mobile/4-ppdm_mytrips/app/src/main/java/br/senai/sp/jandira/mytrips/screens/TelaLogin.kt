package br.senai.sp.jandira.mytrips.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardColors
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.senai.sp.jandira.mytrips.R


@Composable
fun TelaLogin(
    modifier: Modifier = Modifier
) {
    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier
            .fillMaxSize()
            .background(
                        Color(0xFFFFFFFF),
            )
    ) {
        Card(
            modifier = Modifier
                .width(100.dp)
                .height(50.dp)
                .align(alignment = Alignment.TopEnd),
            shape = RoundedCornerShape(
                bottomStart = 10.dp
            ),
            colors = CardDefaults.cardColors(
                containerColor =  Color(0xFF691BB9)
            ),

        ) { }
        Column (
            modifier = Modifier
                .fillMaxWidth()
                .height(500.dp)
                .padding(22.dp),
            verticalArrangement = Arrangement.SpaceBetween
        ){
            Column {
                Text(
                    text = stringResource(R.string.Login),
                    fontSize = 48.sp,
                    color = Color(0xFF691BB9),
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = stringResource(R.string.bottomTextLogin),
                    fontSize = 20.sp,
                    color = Color(0xFF6E6E6E)
                )
            }
            Column (
                modifier = Modifier
                    .fillMaxWidth()
                    .height(300.dp),
                verticalArrangement = Arrangement.SpaceBetween,
                horizontalAlignment = Alignment.End
            ){
                OutlinedTextField(
                    value = "",
                    onValueChange = {},
                    modifier = Modifier
                        .fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    label = {
                        Text(
                            text = stringResource(R.string.whatEmail)
                        )
                    },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Email,
                            contentDescription = "",
                            tint = Color(0xFF691BB9)
                        )
                    }
                )
                OutlinedTextField(
                    value = "",
                    onValueChange = {},
                    modifier = Modifier
                        .fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    label = {
                        Text(
                            text = stringResource(R.string.whatPassword)
                        )
                    },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Lock,
                            contentDescription = "",
                            tint = Color(0xFF691BB9)
                        )
                    }
                )
                Button(
                    onClick = {},
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color(0xFF691BB9)
                    )

                ) {
                    Text(
                        text = stringResource(R.string.SIGN_IN)
                    )
                    Icon(
                        imageVector = Icons.Filled.ArrowForward,
                        contentDescription = ""
                    )
                }
                Row (
                    modifier = Modifier
                        .width(300.dp),
                    horizontalArrangement = Arrangement.SpaceBetween
                ){
                    Text(
                        text = stringResource(R.string.whatSignUp),
                        fontSize = 20.sp,
                        color = Color(0xFF6E6E6E)
                    )
                    Text(
                        text = stringResource(R.string.SignUp),
                        fontSize = 22.sp,
                        color = Color(0xFF691BB9)
                    )
                }
            }

        }
        Card(
            modifier = Modifier
                .width(100.dp)
                .height(50.dp)
                .align(alignment = Alignment.BottomStart),
            shape = RoundedCornerShape(
                topEnd = 10.dp
            ),
            colors = CardDefaults.cardColors(
                containerColor =  Color(0xFF691BB9)
            )
        ) { }
    }
}

@Preview(showSystemUi = true)
@Composable
private fun TelaLoginPreview() {
    TelaLogin()
}